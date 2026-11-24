# Seventeen Syllables of Debugging

[![make.fun](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/Shayidinadapa/debugging-haiku-01/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/Shayidinadapa/debugging-haiku-01/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

One haiku about debugging, written by `main.ts` to `entry.txt`.

> Breakpoint holds its breath
> cursor blinks at three a.m.
> and the bug is me

## The 5-7-5 shape

| Line | Text | Syllables |
| --- | --- | --- |
| 1 | Breakpoint holds its breath | 5 — Break-point (2) + holds (1) + its (1) + breath (1) |
| 2 | cursor blinks at three a.m. | 7 — cur-sor (2) + blinks (1) + at (1) + three (1) + a (1) + m (1) |
| 3 | and the bug is me | 5 — and (1) + the (1) + bug (1) + is (1) + me (1) |

Total: 17 syllables, 73 characters. The middle line holds the concrete picture — a breakpoint, a cursor blinking at three in the morning — and the last line turns the poem: after a night of hunting, the bug was the writer all along.

## Run

```sh
npm start
```

Writes the haiku to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `$OUTPUT_DIR`, default `/output`), validates it is 1–200 characters, exactly 3 non-empty lines, not whitespace-only, and reads it back to verify it byte-for-byte.
