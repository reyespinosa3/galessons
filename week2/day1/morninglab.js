// Each part of an Object
// const myObject = {"0": "Yes", "1": "No", "2": "Maybe"}
// const myObject  --> used to define the Object Name
// = --> used to assign Object Name to Object content
// new Object(); --> used to define an empty Object
// {} --> used to define the elements/function in an myObject
//    see Object above as example
// "0": "Yes" --> 0 is the KEY: YES is the element
// myFunction: () => {console.log("My Object");} --> creates
//    function in an Object
// , --> used to separate Object keys and elements

const adventurer = {
  name: "Sir Rey",
  hitpoints: "1000",
  weapon: "sword",
  weapon2: "dagger"
};
const ogre = {
  name: "Shrek",
  hitpoints: "800",
  weapon: "club",
  weapon2: "rock"
}

const startBattle = () => {
  console.log("Start the Battle");
  let turn = Math.random();
  if (turn >= .5) {
    console.log(adventurer.name + " attacks!");
    ogre.hitpoints -= 100;
    checkWinner();
  } else {
    console.log(ogre.name + " attacks!");
    adventurer.hitpoints -= 100;
    checkWinner();
  }
}

const checkWinner = () => {
  if (adventurer.hitpoints <= 0) {
    console.log(ogre.name + " Wins Battle!");
  } else if (ogre.hitpoints <=0) {
    console.log(adventurer.name + " Wins Battle!");
  } else
  startBattle();
}
startBattle();

// const me = {
//   name: "Rey",
//   age: "48",
//   email: "reynaldo.espinosa.iii@gmail.com"
// };
//
// me.name;
//
// me.age = 1000;
//
// me.age;
//
// me["place of residence"] = "Manor";
//
// me
//
// const monster = {
//   name: "Slimer",
//   color: "greenish",
//   type: "plasm or ghost or something"
// }
// console.log(monster.name);
//
// monster.type = "creature";
// console.log(monster.creature);
//
// monster["age"] = "6"
// console.log(monster);
