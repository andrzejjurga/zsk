function Shape(_nazwa = "shape") {
  this.nazwa = _nazwa;
} //Shape

//rozszerzenie prototypu
//metoda toString ma być wspólna dla wszystkich obiektów typu Shape
Shape.prototype.toString = function () {
  return this.nazwa;
}; 

console.log("\nTesty Shape:\n");
console.log(
  "nazwa konstruktora w prototypie: " + Shape.prototype.constructor.name,
); //TwoDShape
console.log("nazwa obiektu funkcyjnego: " + Shape.name); //TwoDShape
let sh1 = new Shape();
console.log("sh1.nazwa: " + sh1.nazwa); //2D shape
console.log("sh1.toString(): " + sh1.toString()); //2D shape
let ipo = Object.getPrototypeOf(sh1) == Shape.prototype;
console.log("Object.getPrototypeOf(sh1) == Shape.prototype: " + ipo); //true

function TwoDShape(_nazwa = "2D shape") {
  this.nazwa = _nazwa;
} //TwoDShape

//dziedziczenie prototypu
TwoDShape.prototype = Shape.prototype;//zamiennie new Shape() 
//aktualizacja konstruktora
TwoDShape.prototype.constructor = TwoDShape;

//rozszerzenie prototypu - w tym przypadku puste

console.log("\nTesty TwoDShape:\n");
console.log("nazwa konstruktora w prototypie: " + TwoDShape.prototype.constructor.name);//TwoDShape
console.log("nazwa obiektu funkcyjnego: " + TwoDShape.name); //TwoDShape
let tdsh1 = new TwoDShape(); 
console.log("tdsh1.nazwa: " + tdsh1.nazwa); //2D shape
console.log("tdsh1.toString(): " + tdsh1.toString()); //2D shape
ipo = Object.getPrototypeOf(tdsh1) == TwoDShape.prototype;
console.log("Object.getPrototypeOf(tdsh1) == TwoDShape.prototype: " + ipo); //true