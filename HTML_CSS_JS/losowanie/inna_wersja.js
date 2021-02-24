// Create table
const size = 100;
const Arr = Array.from({ length: size }, () => Math.floor(Math.random() * size));
console.table(Arr);
//zadanie 1
const maxAmount = (arr) => {
    const max = Math.max(...arr);
    const newArr = arr.filter((num) => num == max);
    const len = newArr.length;
    return { max, len };
};
//zadanie 2
const showOdd = (arr) => {
    const odd = arr.filter((num) => num % 2);
    return odd;
};
//Zadanie 3
const oddIndexes = (arr) => {
    let odd = new Array(0);
    for (let index = 1; index < arr.length; index += 2) {
        odd = [...odd, arr[index]];
    }
    return odd;
};
//Zadanie 4
const rangeVal = (arr) => {
    const inrng = arr.filter((num) => num >= 5 && num < 15);
    const len = inrng.length;
    return {
        len,
        inrng,
    };
};
document.getElementById("accept").addEventListener("click", () => {
    document.getElementById("output").innerHTML =
        "<br>Zadanie1: <br> max: " + maxAmount(Arr).max + " amount: " + maxAmount(Arr).len + "<br>";
    document.getElementById("output").innerHTML += "<br>Zadanie2: <br> Odd Num: <br>";
    showOdd(Arr).forEach((element) => {
        document.getElementById("output").innerHTML += element + ", ";
    });
    document.getElementById("output").innerHTML += "<br> <br>Zadanie3: <br> Odd Indexes: <br>";
    oddIndexes(Arr).forEach((element) => {
        document.getElementById("output").innerHTML += element + ", ";
    });
    document.getElementById("output").innerHTML +=
        "<br> <br>Zadanie4: <br> Amount: " + rangeVal(Arr).len + "<br>";
    rangeVal(Arr).inrng.forEach((element) => {
        document.getElementById("output").innerHTML += element + ", ";
    });
});