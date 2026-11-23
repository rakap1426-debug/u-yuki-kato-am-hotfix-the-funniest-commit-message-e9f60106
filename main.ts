import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Revert 'fix prod', then revert the revert. Same code, prod is up. Don't ask why. Pager is in the lake.";
if (entry.length < 1 || entry.length > 179) throw new Error("bad length");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
