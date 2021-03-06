"use strict";

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 }
];
const winners = runners.reduce((acc, nextWinner) =>
  acc.time < nextWinner.time ? acc : nextWinner
);

console.log(winners.name);
