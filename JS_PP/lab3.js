//Andrzej Jurga 4C gr1/2

//zad 1
let P1 = { "x": 0, "y": 0 }; 
let P2 = { "x": 0, "y": 3 };
let P3 = { "x": 3, "y": 3 };
let P4 = { "x": 3, "y": 0 };
let xd = [P1, P2, P3, P4];


function polygonArea(tab){
    if(tab.length >= 3)
    {
        var area = 0;
        for(var i = 2; i < tab.length; i++)
        {
            area += Math.abs((tab[i-1].x-tab[0].x)*(tab[i].y-tab[0].y)-(tab[i-1].y-tab[0].y)*(tab[i].x-tab[0].x))/2;
        }
    }
        return area;
}

console.log("Pole: " + polygonArea(xd));

//zad 3
function Person(_imię, _nazwisko, _adres, _data_urodzenia, _miejsce_urodzenia)
{
    this.imię = _imię;
    this.nazwisko = _nazwisko;
    this.adres = _adres;
    this.data_urodzenia = _data_urodzenia;
    this.miejsce_urodzenia = _miejsce_urodzenia;
}
Person1 = new Person("Karol", "Borsuk", "Warszawa", "08.05.1905", "Warszawa");
Person2 = new Person("Władysłwa", "Orlicz", "Poznań", "24.02.1903", "Brzesko");
Person3 = new Person("Witold", "Hurewicz", "Merida", "29.02.1904", "Łódź");
Person4 = new Person("Wacław", "Sierpiński", "Warszawa", "14.03.1882", "Warszawa");

let tabPerson = [Person1, Person2, Person3, Person4];

function findPerson(tabPerson, ...rest)
{
    var wyn = [];
    for(var i = 0; i < tabPerson.length; i++)
        {
            for(var j = 0; j < rest.length; j++)
            {
                if(tabPerson[i].imię == rest[j] || tabPerson[i].nazwisko == rest[j] || tabPerson[i].adres == rest[j] || tabPerson[i].data_urodzenia == rest[j] || tabPerson[i].miejsce_urodzenia == rest[j])// dokończyć sprawdzanie
                    {
                        if(wyn.findIndex(x => x == tabPerson[i]) == -1) 
                            wyn.push(tabPerson[i]);
                    }
            }
        }
    return wyn;
}

var test = findPerson(tabPerson, "Warszawa", "Sierpiński", "Wacław", "Orlicz");

console.log("Dopasowani matematycy:")
for(var i = 0; i < test.length; i++)
{
    console.log(test[i].imię + " " + test[i].nazwisko + " " + test[i].adres + " " + test[i].data_urodzenia + " " + test[i].miejsce_urodzenia)
}

//zad 2 
//pozwoliłem sobie skorzystać z punktu 28 w lab1
function BSTree()
{
    this.root = null;  
}

BSTree.prototype.newNode = function(x) {
    if(this.root == null)
    {
        this.root = x;
    }
    else
    {
        this.root.findPlace(x)
    }
}

Node.prototype.findPlace = function(x) {
    if(this.value > x.value)
        if(this.left == null)
            this.left = x;
        else
            this.left.findPlace(x);
    else
        if(this.right == null)
            this.right = x;
        else
            this.right.findPlace(x);
}

function Node(_value = null)
{
    this.value = _value;
    this.left = null;
    this.right = null;
}

var bstree = new BSTree;
var x = new Node(3);
var y = new Node(2);
var z = new Node(1);
var c = new Node(10);
bstree.newNode(x);
bstree.newNode(y);
bstree.newNode(z);
bstree.newNode(c);