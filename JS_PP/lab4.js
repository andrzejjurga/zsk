function Person(_name, _surname, _age)
{
    this.name = _name;
    this.surname = _surname;
    this.age = _age;
}

let o1 = new Person("Jan", "Kowalski", 18);
let o2 = new Person("Jan", "Kowalski", 18);
let o3 = new Person("Jan", "Kowalski", 18);

let dane = [];
dane.push(o1, o2, o3);

function check(tab, ...rest){
    for(var i = 0; i<tab.length; i++)
    {
        if(rest.length == 1)
        {
            if(tab[i].name == rest[0])
            {
                console.log(tab[i]);
            }
        }
        if(rest.length == 2)
        {
            if(tab[i].name == rest[0] && tab[i].surname == rest[1])
            {
                console.log(tab[i]);
            }
        }
        if(rest.length == 3)
        {
            if(tab[i].name == rest[0] && tab[i].age == rest[1] && tab[i].name == rest[3])
            {
                console.log(tab[i]);
            }
        }
    }
}
check(dane, "Jan", "Kowalski")

let o4 = new Person("Janaaa", "Kowssssalski", 118);
function addPerson(tab, o)
{
    var i = 0;
    while(tab[i].name != o.name && tab[i].surname != o.surname && tab[i].age != o.age && i<tab.length)
    {
        i++;
    }
    if(i<tab.length)
    {
        tab.push(o);
    }
}

addPerson(dane, o4);
console.log("end");