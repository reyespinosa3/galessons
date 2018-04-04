console.log("Up and Running");

//create several different flowers using a constructor
//add new properties to the flower class class
//add method to crosspollenate two flowers to create a new flower

//Constructor for flower
function Flower(color, petals, smellsGood) = {
  this.color = "red";
  this.petals = 12;
  this.smellsGood = true;
}

Flower.prototype = {
  sniff: function sniff() {
    console.log("Sniff Sniff Sniff");
  },
  describe: function describe() {
    alert("This flower is " + this.color + ".");
  },
  render: function render() {
    let flower = document.createElement('p');
    flower.textContent =
    "My pretty flower is "
    + this.color
    + " and has "
    + this petals
    + "pristine petals";
    document.querySelector("body").appendChild(flower);
  }
}
