(() => {
  const MAX_MISTAKES = 4;
  const SELECTION_LIMIT = 4;
  const LEVELS = ["Rookie", "Pro", "All-Pro", "MVP"];
  const STORAGE_ORDER = "sc:order";
  const STORAGE_CURSOR = "sc:cursor";

  const state = {
    order: [],          // randomized array of puzzle indices
    cursor: 0,          // position in `order`
    tiles: [],          // remaining tiles: { group, type, label, id }
    selected: new Set(), // tile ids
    solved: [],         // [{ groupIdx, items }]
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
    newPuzzle: document.getElementById("new-puzzle"),
    helpBtn: document.getElementById("help-btn"),
    howToPlay: document.getElementById("how-to-play"),
    howToPlayClose: document.getElementById("how-to-play-close"),
    levelMeter: document.getElementById("level-meter"),
    allDone: document.getElementById("all-done"),
    allDoneReset: document.getElementById("all-done-reset")
  };

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

  function freshOrder() {
    return shuffleInPlace(PUZZLES.map((_, i) => i));
  }

  function persistProgress() {
    try {
      localStorage.setItem(STORAGE_ORDER, state.order.join(","));
      localStorage.setItem(STORAGE_CURSOR, String(state.cursor));
    } catch (e) {}
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_ORDER);
      const cur = localStorage.getItem(STORAGE_CURSOR);
      if (raw && cur !== null) {
        const parsed = raw.split(",").map(Number).filter(n => Number.isInteger(n) && n >= 0 && n < PUZZLES.length);
        // Order should cover every puzzle exactly once; if not, regenerate.
        if (parsed.length === PUZZLES.length && new Set(parsed).size === PUZZLES.length) {
          state.order = parsed;
          state.cursor = Math.max(0, Math.min(PUZZLES.length, parseInt(cur, 10) || 0));
          return;
        }
      }
    } catch (e) {}
    state.order = freshOrder();
    state.cursor = 0;
    persistProgress();
  }

  function resetProgress() {
    state.order = freshOrder();
    state.cursor = 0;
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
    // Level meter
    const puzzle = blank ? null : currentPuzzle();
    const level = puzzle && puzzle.level ? puzzle.level : null;
    els.levelMeter.querySelectorAll(".meter-tier").forEach(el => {
      el.classList.toggle("active", el.dataset.tier === level);
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

  // Wire up controls
  els.shuffle.addEventListener("click", shuffleGrid);
  els.deselect.addEventListener("click", deselectAll);
  els.submit.addEventListener("click", submitGuess);
  els.newPuzzle.addEventListener("click", advance);

  // How to Play
  els.helpBtn.addEventListener("click", openHowToPlay);
  els.howToPlayClose.addEventListener("click", closeHowToPlay);
  els.howToPlay.addEventListener("click", (e) => {
    if (e.target === els.howToPlay) closeHowToPlay();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !els.howToPlay.hidden) closeHowToPlay();
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
