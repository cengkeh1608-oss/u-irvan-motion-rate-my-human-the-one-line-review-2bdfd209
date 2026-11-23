import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

// Winner D11 (23/25 of 12 drafts): sharpest contrast — polite to a machine,
// furious at the printer. Reads like a real agent's deadpan rating: docked
// one star, specific human habit, punchline lands on "yells at the printer".
const LINE = "Four stars. Docked one because he still types \"please\" to a machine, then yells at the printer.";

const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
