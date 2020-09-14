//Andrzej Jurga 4C gr1/2
function kwadrat(x)
{
    return x*x;
}

console.log((function(x){return x*x;})(12));
console.log(kwadrat(4));

// 1, 2, 3, 4
// x1, y1, x2, y2 

function dystans()
{
    dlugosc = 0;
    if(arguments.length >= 4 && arguments.length % 4 == 0)
    {
        for( var i = 0; i < arguments.length; i+=4)
        {
            dlugosc += Math.sqrt((arguments[i+2]-arguments[i])**2+(arguments[i+3]-arguments[i+1])**2);
        }
        return dlugosc;
    }
    else
    {
        console.log("niepoprawne argumenty");
    }
}
console.log(dystans(0, 0, 1, 0, 0, 0, 1, 0));


