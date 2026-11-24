import { mkdirSync, writeFileSync } from "node:fs";

// One-line code review comment that approves a PR while carrying
// quiet existential dread. Written exactly, with no trailing newline.
const entry =
  "Approved. Clean diff, no notes. I will think about this merge again at 3am, briefly.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
