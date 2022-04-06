#!/usr/bin/env ts-node --experimental-specifier-resolution=node
// Questo file genera in modo statico
// il file sorgente `esercizi.ts`
// prendendo gli esercizi dalle directori indicate in
// `dirEsercizi`
import { readFileSync, writeFileSync } from "fs";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";

var esercizi = [];
const md2HTML = (md) =>
  unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .processSync(md)
    .toString();

var dirEsercizi = [
  "addizione",
  "sottrazione",
  "moltiplicazione",
  "moltiplicazioneeff",
  "divisione",
  "potenza",
  "potenzaeff",
  "fattoriale",
  "fibonacci",
  "reciproco",
  "radq",
];
dirEsercizi.forEach(function (dir) {
  dir = "esercizi/" + dir;
  var e = {
    progetto: md2HTML((0, readFileSync)(dir + "/progetto.md", "utf-8")),
    scheletro: (0, readFileSync)(dir + "/scheletro.cpp", "utf-8"),
    testo: md2HTML((0, readFileSync)(dir + "/testo.md", "utf-8")),
    soluzione: "",
  };
  esercizi.push(e);
});
writeFileSync("esercizi.json", JSON.stringify(esercizi, null, 2), "utf-8");
