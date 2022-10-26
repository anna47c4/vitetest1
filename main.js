"use strict";
import "./style.css";
/* match-sorter npm module imported in */
import { matchSorter } from "match-sorter";
/* array that we're matching from */
const list = ["denmark", "sweden", "norway", "germany", "france", "finland"];
/* lists created where it matches from the list, with the letter we wrote */
const dList = matchSorter(list, "d");
const sList = matchSorter(list, "s");
const gList = matchSorter(list, "g");
const fList = matchSorter(list, "f");
const nList = matchSorter(list, "n");
console.table(list); //consoles the original array
console.table(dList); //consoles the list items that contains a 'd'
/* showing the full list */
document.querySelector("h2").textContent = `Array of countries: ${list}`;
/* displaying the matches */
document.querySelector(
  "#first"
).textContent = `Countries with a 'n' = ${nList}`;
document.querySelector(
  "#second"
).textContent = `Countries with a 'd' = ${dList}`;
document.querySelector(
  "#third"
).textContent = `Countries with a 's' = ${sList}`;

document.querySelector(
  "#fourth"
).textContent = `Countries with a 'g' = ${gList}`;
document.querySelector(
  "#fifth"
).textContent = `Countries with a 'f' = ${fList}`;
