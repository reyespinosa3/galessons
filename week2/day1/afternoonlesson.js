// - In a javaScript file, create a new Object myFatCat and give it five properties, including a weight.
// - Define a method `eat()` on your object that increases myFatCat's weight by one pound, using the `this` keyword.
// - Define another method `meow()` **outside of the object**.
// - Add the `meow()` method to the myFatCat object
// - Make the cat:
//  - meow
//  - console.log it's weight
//  - eat
//  - meow again
//  - console.log it's weight again
// - Paste your code in the thread below when done
// - 7 min.

// let myFatcat = {
//   breed: "evil",
//   weight: 10,
//   color: "white",
//   eyes: "blue",
//   tail: "cropped",
//   eat: function() {
//     this.weight += 1;
//   },
//   meow: function() {
//     console.log('meow');
//   }
// }
//
// for (let key in myFatcat) {
//     console.log(key);
//     console.log(value);
// }



// let meow = () => {
//   console.log("Meow");
// }
// myFatcat.meow = meow;
//
// myFatcat.meow();
// console.log(myFatcat.weight);
// myFatcat.eat();
// myFatcat.meow();
// console.log(myFatcat.weight);

let monkey = {
    name: "Moe",
    species: "gorilla",
    foodsEaten: "apple",
    eatBanana: function() {
      console.log("Eat's an apple");},
    introduce: function() {
      console.log("Hi my name is " + monkey.name + ". I'm a " + monkey.species + ". I've eaten a " + monkey.foodsEaten);}
  }
  let monkey1 = {
    name: "Larry",
    species: "chimp",
    foodsEaten: "banana",
    eatBanana: function() {
      console.log("Eat's a banana");},
      introduce: function() {
        console.log("Hi my name is " + monkey1.name + ". I'm a " + monkey1.species + ". I've eaten a " + monkey1.foodsEaten);},
  }
  let monkey2 = {
    name: "Curly",
    species: "spidermonkey",
    foodsEaten: "orange",
    eatBanana: function() {
      console.log("Eat's a orange");},
      introduce: function() {
        console.log("Hi my name is " + monkey2.name + ". I'm a " + monkey2.species + ". I've eaten a " + monkey2.foodsEaten);}
  }


console.log(monkey.introduce());
console.log(monkey1.introduce());
console.log(monkey2.introduce());
