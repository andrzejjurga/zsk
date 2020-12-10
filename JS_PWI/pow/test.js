let num = 57;
let str = "string";
let tab = [1, 2, 3];
let tabK = Array(1, 2, 3);

console.log(typeof(num));
console.log(typeof(str));
console.log(typeof(tab));
console.log(typeof(tabK));

//konwersja number -> string
let text = num.toString();
console.log(typeof(text));

//notacja naukowa
console.log(num.toExponential(2));
console.log((22).toExponential(2));

let PI = 3.14159265;
let PIA = 32.14159265;
console.log(PI.toFixed());
console.log(PI.toFixed(3));
console.log(PIA.toFixed(3));

console.log(PIA.toPrecision(4));

