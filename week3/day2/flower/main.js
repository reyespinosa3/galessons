console.log("Up and Running");

//create several different flowers using a constructor
//add new properties to the flower class class
//add method to crosspollenate two flowers to create a new flower

//Constructor for flower
function Flower(color, petals, smellsGood) {
  this.color = "red";
  this.petals = 12;
  this.smellsGood = true;
}

Flower.prototype.sniff = function() {
    console.log("Sniff Sniff Sniff");
  }
Flower.prototype.describe = function() {
    alert("This flower is " + this.color + ".");
  }
Flower.prototype.render = function() {
    let flower = document.createElement('p');
    flower.textContent =
    "My pretty flower is "
    + this.color
    + " and has "
    + this.petals
    + " pristine petals";
    document.querySelector("body").appendChild(flower);
  }
Flower.prototype.compare = function(otherFlower) {
  console.log("My " + this.color + " flower is prettier than " + otherFlower.color + ".");
  }
Flower.prototype.crosspollenate = function(otherFlower) {
  this.color = this.color + " and " + otherFlower.color;
  console.log("My new color is " + this.color);
}

let rose = new Flower();
rose.height = "6 inches";
console.log(rose);
let lilly = new Flower()
lilly.color = "white";
lilly.petals = 6;
lilly.location = "dirt";
console.log(lilly);
let daisy = new Flower()
daisy.color = "yellow";
daisy.petals = 10;
daisy.bees = true;
console.log(daisy);
let bluebonnet = new Flower()
bluebonnet.color = "blue";
bluebonnet.petals = 24;
bluebonnet.famous = true;
console.log(bluebonnet);

rose.compare(lilly);
rose.crosspollenate(lilly);
rose.render();
