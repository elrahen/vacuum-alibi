import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync(
  "/output/entry.txt",
  "I did not miss that spot. My sensors scanned it twice and ruled it the dust bunny's legal residence.",
  "utf8",
);
