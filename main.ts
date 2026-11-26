import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const text = "One star: watered me with lukewarm sparkling water once in March, moved me to a dark corner, and still has the audacity to call herself a plant mom.";
if (Array.from(text).length < 1 || Array.from(text).length > 279 || /[\r\n]/.test(text)) {
  throw new Error("Entry must be a single line of 1 to 279 characters");
}

const output = text + "\n";
const outputDirectory = new URL("/output/", import.meta.url);
const outputFile = new URL("entry.txt", outputDirectory);

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputFile, output, "utf8");
if (!readFileSync(outputFile).equals(Buffer.from(output, "utf8"))) {
  throw new Error("Written output does not match the expected bytes");
}
