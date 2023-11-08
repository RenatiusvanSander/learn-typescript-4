interface Add {
    (x:number, y:number):number
}

interface Sub {
    (x:number, y:number):number
}

var add:Add;
var sub:Sub;

add=function(x:number, y:number):number {
    console.log(x+y);
    return x + y;
}

sub=function(x:number, y:number):number {
    console.log(x-y);
    return x-y;
}