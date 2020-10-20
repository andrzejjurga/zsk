/* Schemat 1

krok 1: utworzenie konstruktorów 
krok 2: zasłonięcie prototypów 
krok 3: uaktualnienie konstruktorów w prototypach

*/

//-------------------------krok 1-----------------------------------
function Shape(_nazwa = "shape") 
{
  this.nazwa = _nazwa;

  this.toString = function () 
  {
    return this.nazwa;
  };//Shape.toString

}//Shape

function TwoDShape(_nazwa = "2D shape") 
{
  this.nazwa = _nazwa;
}//TwoDShape

function Triangle(_podstawa, _wysokosc, _nazwa = "triangle") 
{
  this.nazwa = _nazwa;
  this.podstawa = _podstawa;
  this.wysokosc = _wysokosc;

  this.getArea = function () 
  {
    return this.podstawa * this.wysokosc / 2;
  };//Triangle.getArea

}//Triangle

//testy prototypów i konstruktorów:

console.log("------------Po utworzeniu konstruktorów:------------\n");
console.log("Testy Shape:\n");

console.log("nazwa konstruktora w prototypie: " + Shape.prototype.constructor.name);//Shape
console.log("nazwa obiektu funkcyjnego: " + Shape.name); //Shape
let sh1 = new Shape();
console.log("sh1.nazwa: " + sh1.nazwa); //shape
console.log("sh1.toString(): " + sh1.toString()); //shape
let ipo1 = Object.getPrototypeOf(sh1) == Shape.prototype;
console.log("Object.getPrototypeOf(sh1) == Shape.prototype: " + ipo1); //true



console.log("\nTesty TwoDShape:\n");

console.log("nazwa konstruktora w prototypie: " + TwoDShape.prototype.constructor.name); //TwoDShape
console.log("nazwa obiektu funkcyjnego: " + TwoDShape.name); //TwoDShape
let tdsh1 = new TwoDShape();
console.log("tdsh1.nazwa: " + tdsh1.nazwa); //2D shape
console.log("tdsh1.toString(): " + tdsh1.toString()); //Object
let ipo2 = Object.getPrototypeOf(tdsh1) == TwoDShape.prototype;
console.log("Object.getPrototypeOf(tdsh1) == TwoDShape.prototype: " + ipo2);//true

console.log("\nTesty Triangle:\n");
console.log("nazwa konstruktora w prototypie: " + Triangle.prototype.constructor.name); //Triangle
console.log("nazwa obiektu funkcyjnego: " + Triangle.name); //Triangle
let tr1 = new Triangle(1,1);
console.log("tr1.nazwa: " + tr1.nazwa); //triangle
console.log("tr1.toString(): " + tr1.toString()); //Object
console.log("tr1.getArea(): " + tr1.getArea()); //0.5
let ipo3 = Object.getPrototypeOf(tr1) == Triangle.prototype;
console.log("Object.getPrototypeOf(tr1) == Triangle.prototype: " + ipo3)//true

//-------------------------krok 2-----------------------------------


TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();

//testy prototypów i konstruktorów:

console.log("\n------------Po zasłonięciu prototypów------------\n");
console.log("Testy Shape:\n");

console.log("nazwa konstruktora w prototypie: " + Shape.prototype.__proto__.constructor.name); //Shape
console.log("nazwa obiektu funkcyjnego: " + Shape.name); //Shape
let sh2 = new Shape();
console.log("sh2.nazwa: " + sh2.nazwa); //shape
console.log("sh2.toString(): " + sh2.toString()); //shape
ipo1 = Object.getPrototypeOf(sh2) == Shape.prototype;
console.log("Object.getPrototypeOf(sh2) == Shape.prototype: " + ipo1);//true

console.log("\nTesty TwoDShape:\n");
console.log("nazwa konstruktora w prototypie: " + TwoDShape.prototype.__proto__.constructor.name); //Shape
console.log("nazwa obiektu funkcyjnego: " + TwoDShape.name); //TwoDShape
let tdsh2 = new TwoDShape();//wywołanie konstruktora funkcyjnego
console.log("tdsh2.nazwa: " + tdsh2.nazwa); //2D shape
console.log("tdsh2.toString(): " + tdsh2.toString()); //2D shape
ipo2 = Object.getPrototypeOf(tdsh2) == TwoDShape.prototype;
console.log("Object.getPrototypeOf(tdsh2) == TwoDShape.prototype: " + ipo2);//true

let tdsh22 = new TwoDShape.prototype.__proto__.constructor();//wywołanie konstruktora z prototypi
console.log("tdsh22.nazwa: " + tdsh22.nazwa); //shape
console.log("tdsh22.toString(): " + tdsh22.toString()); //shape
ipo2 = Object.getPrototypeOf(tdsh22) == TwoDShape.prototype;
console.log("Object.getPrototypeOf(tdsh22) == TwoDShape.prototype: " + ipo2);//false
ipo2 = Object.getPrototypeOf(tdsh22) == Shape.prototype;
console.log("Object.getPrototypeOf(tdsh22) == Shape.prototype: " + ipo2);//true

console.log("\nTesty Triangle:\n");
console.log("nazwa konstruktora w prototypie: " + Triangle.prototype.__proto__.constructor.name); //Shape
console.log("nazwa obiektu funkcyjnego: " + Triangle.name); //Triangle
let tr2 = new Triangle(10,10);//wywołanie konstruktora funkcyjnego
console.log("tr2.nazwa: " + tr2.nazwa); //triangle
console.log("tr2.toString(): " + tr2.toString()); //triangle
console.log("tr2.getArea(): " + tr2.getArea()); //50
ipo3 = Object.getPrototypeOf(tr2) == Triangle.prototype;
console.log("Object.getPrototypeOf(tr2) == Triangle.prototype: " + ipo3);//true

let tr22 = new TwoDShape.prototype.__proto__.constructor(); //wywołanie konstruktora z prototypi
console.log("tr22.nazwa: " + tr22.nazwa); //shape
console.log("tr22.toString(): " + tr22.toString()); //shape
ipo3 = Object.getPrototypeOf(tr22) == Triangle.prototype;
console.log("Object.getPrototypeOf(tr22) == Triangle.prototype: " + ipo3);//false
ipo3 = Object.getPrototypeOf(tr22) == TwoDShape.prototype;
console.log("Object.getPrototypeOf(tr22) == TwoDShape.prototype: " + ipo3);//false
ipo3 = Object.getPrototypeOf(tr22) == Shape.prototype;
console.log("Object.getPrototypeOf(tr22) == Shape.prototype: " + ipo3);//true

//-------------------------krok 3-----------------------------------

TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype.constructor = Triangle;


console.log("\n------------Po aktualizacji konstruktorów w prototypach------------\n");
console.log("Testy Shape:\n");

console.log("nazwa konstruktora w prototypie: " + Shape.prototype.constructor.name,); //Shape
console.log("nazwa obiektu funkcyjnego: " + Shape.name); //Shape
let sh3 = new Shape();
console.log("sh3.nazwa: " + sh3.nazwa); //shape
console.log("sh3.toString(): " + sh3.toString()); //shape
ipo1 = Object.getPrototypeOf(sh3) == Shape.prototype;
console.log("Object.getPrototypeOf(sh3) == Shape.prototype: " + ipo1);//true

console.log("\nTesty TwoDShape:\n");
console.log("nazwa konstruktora w prototypie: " + TwoDShape.prototype.constructor.name); //TwoDShape
console.log("nazwa obiektu funkcyjnego: " + TwoDShape.name); //TwoDShape
let tdsh3 = new TwoDShape(); //wywołanie konstruktora funkcyjnego
console.log("tdsh3.nazwa: " + tdsh3.nazwa); //2D shape
console.log("tdsh3.toString(): " + tdsh3.toString()); //2D shape
ipo2 = Object.getPrototypeOf(tdsh3) == TwoDShape.prototype;
console.log("Object.getPrototypeOf(tdsh3) == TwoDShape.prototype: " + ipo2);//true

let tdsh33 = new TwoDShape.prototype.constructor();  //wywołanie konstruktora z prototypu
console.log("tdsh33.nazwa: " + tdsh33.nazwa); //2D shape
console.log("tdsh33.toString(): " + tdsh33.toString()); //2D shape
ipo2 = Object.getPrototypeOf(tdsh33) == TwoDShape.prototype;
console.log("Object.getPrototypeOf(tdsh33) == TwoDShape.prototype: " + ipo2);//true

console.log("\nTesty Triangle:\n");
console.log("nazwa konstruktora w prototypie: " + Triangle.prototype.constructor.name); //Triangle
console.log("nazwa obiektu funkcyjnego: " + Triangle.name); //Triangle
let tr3 = new Triangle(10, 10); //wywołanie konstruktora funkcyjnego
console.log("tr3.nazwa: " + tr3.nazwa); //triangle
console.log("tr3.toString(): " + tr3.toString()); //triangle
console.log("tr3.getArea(): " + tr3.getArea()); //50
ipo3 = Object.getPrototypeOf(tr3) == Triangle.prototype;
console.log("Object.getPrototypeOf(tr3) == Triangle.prototype: " + ipo3);//true

let tr33 = new Triangle.prototype.constructor(); //wywołanie konstruktora z prototypu
console.log("tr33.nazwa: " + tr33.nazwa); //triangle
console.log("tr33.toString(): " + tr33.toString()); //triangle
ipo3 = Object.getPrototypeOf(tr33) == Triangle.prototype;
console.log("Object.getPrototypeOf(tr33) == Triangle.prototype: " + ipo3);//true
