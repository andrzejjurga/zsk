const map = new Map();
map.set("kolor1", "red");
map.set("kolor2", "blue"); //ustawia nazwę i jej własność

//console.log(map.get("kolor1")); //pobiera wartość danego klucza

//console.log(map.has("klucz2")); //sprawdza czy mapa posiada dany element

map.delete("kolor2"); //usuwa podany element

map.clear(); //czyści całą mape

map.set("wart1", "jeden");
map.set("wart2", "dwa");

//console.log(map.entries()); //zwraca wszystie "wpisy"

//console.log(map.keys()); //zwraca klucze

//console.log(map.values()); //zwraca wartości z tablicy

//console.log(map.size); //zwraca rozmiar mapy

map.set("wart3", "trzy");
map.set("wart4", "cztery");

map.forEach((value, key, map) => {
    //console.log(key);
});

const mySet = new Set(["jeden", "dwa", "trzy", "cztery"]);
for(const key in mySet.keys())
{
    //console.log(key);
}

function Osoba(_n, _s, _a)
{
    this.name = _n;
    this.surname = _s;
    this.age = _a;
}

let o1 = new Osoba("Jan", "Kowalski", 69);
let o2 = new Osoba("Włodzimir", "Moroawiecki", 96);

Osoba.prototype.height = 180;
Osoba.prototype.setHeight = function(_height = 180)
{
    this.height = _height;
};

o2.setHeight(150);

console.log(o2);

