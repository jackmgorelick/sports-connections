# Sports Connections

A sports-themed take on the NYT Connections puzzle. Find four groups of four — stadiums, players, teams, sayings, awards — anything sports.

**Play:** open `index.html` in any modern browser. No build step.

## Rules

- Pick four tiles that share something in common, then **Submit**.
- You get **4 mistakes** before the game reveals the answers.
- Each puzzle has exactly one solution. Watch for items that look like they belong to multiple categories.

## Puzzle Difficulty

Each puzzle is rated by overall difficulty:

| Level    | What to expect                                                                 |
| -------- | ------------------------------------------------------------------------------ |
| Rookie   | Recognizable names and clean groupings. Solid sports knowledge is enough.      |
| Pro      | Mid-tier. Some categories require knowing eras, positions, or team history.    |
| All-Pro  | Real misdirection. Items often look like they fit two groups.                  |
| MVP      | Wordplay and multi-type matching. Read every tile twice.                       |

Inside each puzzle, the four groups themselves are color-coded by within-puzzle difficulty: yellow (easiest) → green → blue → purple (trickiest).

## Sports in scope

NFL, NBA, MLB, NHL, Golf, NCAA Basketball, NCAA Football.

## Files

- `index.html` — game shell
- `styles.css` — styling
- `game.js` — game loop and state
- `puzzles.js` — puzzle data
