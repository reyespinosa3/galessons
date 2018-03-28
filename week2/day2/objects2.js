const movie = { title: "Eraserhead", director: "David Lynch", year: 1978 }

for (let keys in movie) {
  console.log(keys);
}

for (let keys in movie) {
  console.log(movie[keys]);
}

// console.log("Ready to Go!");
//
// const adventurer = {
// 	name: "mickey",
// 	hitpoints: 100,
// 	belongings: ["sword", "potion", "shield"],
//   companion: {
//               name: "velma",
//               type: "bat"
//             }
//   companion2: {
//               name: "Mario",
//               type: "insect"
//   }
// }
//
// console.log(adventurer.companion.name);
// adventurer.companion.name = "susan";
// console.log(adventurer.companion.name);

// console.log(adventurer.belongings[2]);
// adventurer.belongings.push("thrasher magazine");
//
// for (i=0; i<=adventurer.belongings.length; i++) {
//   console.log(adventurer.belongings[i]);
// }
// adventurer.belongings.sort();
// console.log(adventurer.belongings);
