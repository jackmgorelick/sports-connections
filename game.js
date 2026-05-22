(() => {
  const MAX_MISTAKES = 4;
  const SELECTION_LIMIT = 4;
  const LEVELS = ["Rookie", "Pro", "All-Pro", "MVP"];
  const STORAGE_ORDER = "sc:order";
  const STORAGE_CURSOR = "sc:cursor";
  const STORAGE_STATS = "sc:stats";
  const STORAGE_RUN = "sc:run";
  const STORAGE_FILTER = "sc:filter";

  const state = {
    order: [],          // randomized array of puzzle indices (respects filter)
    cursor: 0,          // position in `order`
    runId: 0,           // identifies current shuffle run (for stats dedup)
    levelFilter: "all", // "all" | "Rookie" | "Pro" | "All-Pro" | "MVP"
    tiles: [],          // remaining tiles: { group, type, label, id }
    selected: new Set(), // tile ids
    solved: [],         // [{ groupIdx, items }]
    guesses: [],        // each guess as [diff, diff, diff, diff] for share grid
    mistakes: 0,
    gameOver: false
  };

  const els = {
    grid: document.getElementById("grid"),
    solvedGroups: document.getElementById("solved-groups"),
    mistakesDots: document.getElementById("mistakes-dots"),
    message: document.getElementById("message"),
    shuffle: document.getElementById("shuffle"),
    deselect: document.getElementById("deselect"),
    submit: document.getElementById("submit"),
    share: document.getElementById("share"),
    newPuzzle: document.getElementById("new-puzzle"),
    helpBtn: document.getElementById("help-btn"),
    howToPlay: document.getElementById("how-to-play"),
    howToPlayClose: document.getElementById("how-to-play-close"),
    levelMeter: document.getElementById("level-meter"),
    allDone: document.getElementById("all-done"),
    allDoneReset: document.getElementById("all-done-reset"),
    statsBtn: document.getElementById("stats-btn"),
    statsModal: document.getElementById("stats"),
    statsClose: document.getElementById("stats-close"),
    statPlayed: document.getElementById("stat-played"),
    statSolved: document.getElementById("stat-solved"),
    statWinrate: document.getElementById("stat-winrate"),
    statPerfect: document.getElementById("stat-perfect"),
    statDistribution: document.getElementById("stat-distribution"),
    statByLevel: document.getElementById("stat-by-level"),
    statEmpty: document.getElementById("stat-empty")
  };

  function loadStats() {
    try {
      const raw = localStorage.getItem(STORAGE_STATS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {}
    return [];
  }

  function saveStats(arr) {
    try { localStorage.setItem(STORAGE_STATS, JSON.stringify(arr)); } catch (e) {}
  }

  function recordResult(puzzle, solved, mistakes) {
    const stats = loadStats();
    // Guard against double-recording the same cursor (e.g. on refresh)
    if (stats.some(s => s.cursor === state.cursor && s.run === state.runId)) return;
    stats.push({
      run: state.runId,
      cursor: state.cursor,
      puzzleId: puzzle.id,
      level: puzzle.level || "Pro",
      solved: !!solved,
      mistakes: mistakes
    });
    saveStats(stats);
  }

  function openStats() {
    renderStats();
    els.statsModal.hidden = false;
    els.statsModal.setAttribute("aria-hidden", "false");
  }
  function closeStats() {
    els.statsModal.hidden = true;
    els.statsModal.setAttribute("aria-hidden", "true");
  }

  function renderStats() {
    const stats = loadStats();
    const played = stats.length;
    const solved = stats.filter(s => s.solved).length;
    const perfect = stats.filter(s => s.solved && s.mistakes === 0).length;
    const winrate = played === 0 ? "—" : Math.round((solved / played) * 100) + "%";

    els.statPlayed.textContent = String(played);
    els.statSolved.textContent = String(solved);
    els.statWinrate.textContent = winrate;
    els.statPerfect.textContent = String(perfect);

    // Mistake distribution: 0,1,2,3 mistakes (solved) + Out of guesses (4, unsolved)
    const buckets = [
      { label: "0 (Perfect)", filter: s => s.solved && s.mistakes === 0 },
      { label: "1 mistake",   filter: s => s.solved && s.mistakes === 1 },
      { label: "2 mistakes",  filter: s => s.solved && s.mistakes === 2 },
      { label: "3 mistakes",  filter: s => s.solved && s.mistakes === 3 },
      { label: "Out of guesses", state: "lost", filter: s => !s.solved }
    ];
    const bucketCounts = buckets.map(b => stats.filter(b.filter).length);
    const maxBucket = Math.max(1, ...bucketCounts);

    els.statDistribution.innerHTML = buckets.map((b, i) => {
      const count = bucketCounts[i];
      const width = (count / maxBucket) * 100;
      const state = b.state ? ` data-state="${b.state}"` : "";
      return `
        <div class="dist-row"${state}>
          <span class="dist-label">${b.label}</span>
          <div class="dist-track"><div class="dist-bar" style="width: ${width}%"></div></div>
          <span class="dist-count">${count}</span>
        </div>`;
    }).join("");

    // By difficulty level: solved vs played per tier
    els.statByLevel.innerHTML = LEVELS.map(tier => {
      const subset = stats.filter(s => s.level === tier);
      const sub_solved = subset.filter(s => s.solved).length;
      const ratio = subset.length === 0 ? 0 : sub_solved / subset.length;
      const width = ratio * 100;
      const label = `${tier}`;
      const count = `${sub_solved}/${subset.length}`;
      return `
        <div class="dist-row" data-level="${tier}">
          <span class="dist-label">${label}</span>
          <div class="dist-track"><div class="dist-bar" style="width: ${width}%"></div></div>
          <span class="dist-count">${count}</span>
        </div>`;
    }).join("");

    els.statEmpty.hidden = played > 0;
  }

  function openHowToPlay() {
    els.howToPlay.hidden = false;
    els.howToPlay.setAttribute("aria-hidden", "false");
  }
  function closeHowToPlay() {
    els.howToPlay.hidden = true;
    els.howToPlay.setAttribute("aria-hidden", "true");
    try { localStorage.setItem("sc:seenHowToPlay", "1"); } catch (e) {}
  }

  function openAllDone() {
    els.allDone.hidden = false;
    els.allDone.setAttribute("aria-hidden", "false");
  }
  function closeAllDone() {
    els.allDone.hidden = true;
    els.allDone.setAttribute("aria-hidden", "true");
  }

  function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function indicesForFilter(filter) {
    if (!filter || filter === "all") return PUZZLES.map((_, i) => i);
    return PUZZLES.map((p, i) => p.level === filter ? i : -1).filter(i => i >= 0);
  }

  function freshOrder() {
    return shuffleInPlace(indicesForFilter(state.levelFilter));
  }

  function persistProgress() {
    try {
      localStorage.setItem(STORAGE_ORDER, state.order.join(","));
      localStorage.setItem(STORAGE_CURSOR, String(state.cursor));
      localStorage.setItem(STORAGE_RUN, String(state.runId));
      localStorage.setItem(STORAGE_FILTER, state.levelFilter);
    } catch (e) {}
  }

  function loadProgress() {
    let storedFilter = "all";
    try { storedFilter = localStorage.getItem(STORAGE_FILTER) || "all"; } catch (e) {}
    state.levelFilter = ["all", "Rookie", "Pro", "All-Pro", "MVP"].includes(storedFilter) ? storedFilter : "all";

    try {
      const raw = localStorage.getItem(STORAGE_ORDER);
      const cur = localStorage.getItem(STORAGE_CURSOR);
      const run = localStorage.getItem(STORAGE_RUN);
      if (raw && cur !== null) {
        const parsed = raw.split(",").map(Number).filter(n => Number.isInteger(n) && n >= 0 && n < PUZZLES.length);
        const expectedSet = new Set(indicesForFilter(state.levelFilter));
        const parsedSet = new Set(parsed);
        const sameSet = parsed.length === expectedSet.size && [...expectedSet].every(i => parsedSet.has(i));
        if (sameSet) {
          state.order = parsed;
          state.cursor = Math.max(0, Math.min(state.order.length, parseInt(cur, 10) || 0));
          state.runId = run ? parseInt(run, 10) || 1 : 1;
          return;
        }
      }
    } catch (e) {}
    state.order = freshOrder();
    state.cursor = 0;
    state.runId = Date.now();
    persistProgress();
  }

  function resetProgress() {
    state.order = freshOrder();
    state.cursor = 0;
    state.runId = Date.now();
    persistProgress();
    closeAllDone();
    loadCurrent();
  }

  function selectLevel(tier) {
    if (!tier) return;
    if (state.levelFilter === tier) return; // no-op if already selected
    state.levelFilter = tier;
    state.order = freshOrder();
    state.cursor = 0;
    state.runId = Date.now();
    persistProgress();
    closeAllDone();
    loadCurrent();
  }

  function currentPuzzle() {
    return PUZZLES[state.order[state.cursor]];
  }

  function loadCurrent() {
    if (state.cursor >= state.order.length) {
      // All puzzles exhausted
      openAllDone();
      // Render a blank grid so nothing stale is visible behind the modal
      state.tiles = [];
      state.selected.clear();
      state.solved = [];
      state.mistakes = 0;
      state.gameOver = true;
      render(true);
      return;
    }

    const puzzle = currentPuzzle();
    const tiles = [];
    let id = 0;
    puzzle.groups.forEach((group, gIdx) => {
      group.items.forEach(item => {
        tiles.push({ id: id++, group: gIdx, type: item.type, label: item.label });
      });
    });
    shuffleInPlace(tiles);
    state.tiles = tiles;
    state.selected.clear();
    state.solved = [];
    state.guesses = [];
    state.mistakes = 0;
    state.gameOver = false;
    setMessage("");
    render();
  }

  function advance() {
    state.cursor += 1;
    persistProgress();
    loadCurrent();
  }

  function lengthClass(label) {
    const plain = label.replace(/[“”"']/g, "");
    if (plain.length >= 16) return "xlong";
    if (plain.length >= 11) return "long";
    return "";
  }

  function render(blank) {
    // Level meter — highlight the active filter
    els.levelMeter.querySelectorAll(".meter-tier").forEach(el => {
      el.classList.toggle("active", el.dataset.tier === state.levelFilter);
    });

    // Mistakes dots
    const remaining = MAX_MISTAKES - state.mistakes;
    els.mistakesDots.textContent = "●".repeat(remaining) + "○".repeat(state.mistakes);

    // Solved groups (rendered top → bottom in solve order)
    els.solvedGroups.innerHTML = "";
    if (!blank) {
      state.solved.forEach(s => {
        const group = currentPuzzle().groups[s.groupIdx];
        const row = document.createElement("div");
        row.className = "solved-row";
        row.dataset.diff = String(group.difficulty);
        row.innerHTML = `
          <div class="category">${group.category}</div>
          <div class="items">${s.items.map(i => i.label).join(" · ")}</div>
        `;
        els.solvedGroups.appendChild(row);
      });
    }

    // Grid of remaining tiles
    els.grid.innerHTML = "";
    state.tiles.forEach(tile => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tile " + lengthClass(tile.label);
      if (state.selected.has(tile.id)) btn.classList.add("selected");
      btn.textContent = tile.label;
      btn.disabled = state.gameOver;
      btn.addEventListener("click", () => toggleSelect(tile.id));
      els.grid.appendChild(btn);
    });

    // Controls
    els.submit.disabled = state.gameOver || state.selected.size !== SELECTION_LIMIT;
    els.deselect.disabled = state.gameOver || state.selected.size === 0;
    els.shuffle.disabled = state.gameOver || state.tiles.length === 0;
    els.share.disabled = !(state.gameOver && state.guesses.length > 0);
  }

  function toggleSelect(id) {
    if (state.gameOver) return;
    if (state.selected.has(id)) {
      state.selected.delete(id);
    } else if (state.selected.size < SELECTION_LIMIT) {
      state.selected.add(id);
    }
    setMessage("");
    render();
  }

  function deselectAll() {
    state.selected.clear();
    render();
  }

  function shuffleGrid() {
    shuffleInPlace(state.tiles);
    render();
  }

  function submitGuess() {
    if (state.selected.size !== SELECTION_LIMIT || state.gameOver) return;

    const guessTiles = state.tiles.filter(t => state.selected.has(t.id));
    const puzzleGroups = currentPuzzle().groups;
    state.guesses.push(guessTiles.map(t => puzzleGroups[t.group].difficulty));

    const groupCounts = guessTiles.reduce((acc, t) => {
      acc[t.group] = (acc[t.group] || 0) + 1;
      return acc;
    }, {});
    const groups = Object.keys(groupCounts);

    if (groups.length === 1) {
      // Correct
      const groupIdx = Number(groups[0]);
      state.solved.push({ groupIdx, items: guessTiles });
      state.tiles = state.tiles.filter(t => !state.selected.has(t.id));
      state.selected.clear();
      setMessage("Nice!", "success");
      if (state.solved.length === 4) {
        const lostCount = state.mistakes;
        setMessage(
          lostCount === 0 ? "Perfect — no mistakes!" : `Solved with ${lostCount} mistake${lostCount === 1 ? "" : "s"}.`,
          "success"
        );
        state.gameOver = true;
        recordResult(currentPuzzle(), true, lostCount);
      }
    } else {
      state.mistakes++;
      const oneAway = Object.values(groupCounts).some(c => c === 3);
      setMessage(oneAway ? "One away…" : "Not quite.", "error");
      shakeSelected();
      if (state.mistakes >= MAX_MISTAKES) {
        revealRemaining();
        setMessage("Out of guesses. Here's the answer.", "error");
        state.gameOver = true;
        recordResult(currentPuzzle(), false, state.mistakes);
      }
    }
    render();
  }

  function shakeSelected() {
    const buttons = els.grid.querySelectorAll(".tile.selected");
    buttons.forEach(b => {
      b.classList.remove("shake");
      void b.offsetWidth;
      b.classList.add("shake");
    });
  }

  function revealRemaining() {
    const solvedIdx = new Set(state.solved.map(s => s.groupIdx));
    const remainingByGroup = {};
    state.tiles.forEach(t => {
      if (!remainingByGroup[t.group]) remainingByGroup[t.group] = [];
      remainingByGroup[t.group].push(t);
    });
    const ordered = Object.keys(remainingByGroup)
      .map(Number)
      .filter(g => !solvedIdx.has(g))
      .sort((a, b) => currentPuzzle().groups[a].difficulty - currentPuzzle().groups[b].difficulty);
    ordered.forEach(gIdx => {
      state.solved.push({ groupIdx: gIdx, items: remainingByGroup[gIdx] });
    });
    state.tiles = [];
    state.selected.clear();
  }

  function setMessage(text, tone) {
    els.message.textContent = text || "";
    els.message.classList.remove("error", "success");
    if (tone) els.message.classList.add(tone);
  }

  function buildShareText() {
    const puzzle = currentPuzzle();
    const EMOJI = ["🟨", "🟩", "🟦", "🟪"];
    const grid = state.guesses.map(row => row.map(d => EMOJI[d] || "⬜").join("")).join("\n");
    const won = state.mistakes < MAX_MISTAKES;
    let result;
    if (won && state.mistakes === 0)       result = "Perfect game! 🏆";
    else if (won && state.mistakes === 1)  result = "Solved with 1 mistake.";
    else if (won)                          result = `Solved with ${state.mistakes} mistakes.`;
    else                                   result = "Out of guesses.";
    const url = "jackmgorelick.github.io/sports-connections";
    return `Sports Connections #${puzzle.id} — ${puzzle.level}\n${grid}\n${result}\n${url}`;
  }

  async function shareResult() {
    if (!state.gameOver || state.guesses.length === 0) return;
    const text = buildShareText();
    let copied = false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        copied = true;
      }
    } catch (e) {}
    if (!copied) {
      // Fallback for older browsers / insecure contexts
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { copied = document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
    }
    if (copied) {
      const prev = els.message.textContent;
      const prevTone = els.message.classList.contains("error") ? "error" : els.message.classList.contains("success") ? "success" : null;
      setMessage("Copied to clipboard!", "success");
      setTimeout(() => setMessage(prev, prevTone), 2000);
    } else {
      setMessage("Could not copy — long-press to copy manually.", "error");
    }
  }

  // Wire up controls
  els.shuffle.addEventListener("click", shuffleGrid);
  els.deselect.addEventListener("click", deselectAll);
  els.submit.addEventListener("click", submitGuess);
  els.share.addEventListener("click", shareResult);
  els.newPuzzle.addEventListener("click", advance);

  // Level filter
  els.levelMeter.addEventListener("click", (e) => {
    const btn = e.target.closest(".meter-tier");
    if (btn && btn.dataset.tier) selectLevel(btn.dataset.tier);
  });

  // How to Play
  els.helpBtn.addEventListener("click", openHowToPlay);
  els.howToPlayClose.addEventListener("click", closeHowToPlay);
  els.howToPlay.addEventListener("click", (e) => {
    if (e.target === els.howToPlay) closeHowToPlay();
  });

  // Stats
  els.statsBtn.addEventListener("click", openStats);
  els.statsClose.addEventListener("click", closeStats);
  els.statsModal.addEventListener("click", (e) => {
    if (e.target === els.statsModal) closeStats();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!els.howToPlay.hidden) closeHowToPlay();
    if (!els.statsModal.hidden) closeStats();
  });

  // All done
  els.allDoneReset.addEventListener("click", resetProgress);

  // Auto-show How to Play on first visit
  let hasSeen = false;
  try { hasSeen = localStorage.getItem("sc:seenHowToPlay") === "1"; } catch (e) {}
  if (!hasSeen) openHowToPlay();

  // Boot
  loadProgress();
  loadCurrent();
})();
