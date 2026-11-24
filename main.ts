import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My sensors report the dust under the sofa has unionized. I do not cross picket lines, even crumb-sized ones.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
