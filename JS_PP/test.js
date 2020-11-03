function Book(_t, _a, _ISBN, _w, _r)
{
    this.title = _t;
    this.author = _a;
    this.ISBN = _ISBN;
    this.publisher = _w;
    this.year = _r;
}

var tab = new Array();

var book1 = new Book("bbbb", "bbbb", "1234567890123", "bbbb", "1984")
var book2 = new Book("aaaa", "aaaam", "1234567890123", "aaaa", "1984")
var book3 = new Book("cccc", "cccc", "1234567890123", "cccc", "1984")
var book4 = new Book("dddd", "dddd", "1234567890123", "dddd", "1984")


tab.unshift(book1)
tab.unshift(book2)
tab.unshift(book3)
tab.unshift(book4)


function nameSort(a, b)
{
    if (a.author > b.author) return 1;
    if (a.author < b.author) return -1;
    return 0;
}
  
//tab.sort(nameSort);

console.log(tab[0]);
console.log(tab[1]);
console.log(tab[2]);
console.log(tab[3]);