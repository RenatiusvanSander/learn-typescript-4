var hello = (name:string):string=>{
    return "hello" + name;
}

var multiply = (num1:number, num2:number):number=>{
    return num1 * num2;
}

console.log(hello(" Remy"));
console.log("Product is " + multiply(5,8));

var myarray:Array<any> = [];

for(var i = 0; i < 10; i++) {
    myarray.push(():number=>{return i;} );
}

for(var i = 0; i < 10; i++) {
    console.log(myarray[i]());
}