var hello = (name:string):string=>{
    return "hello" + name;
}

var multiply = (num1:number, num2:number):number=>{
    return num1 * num2;
}

console.log(hello(" Remy"));
console.log("Product is " + multiply(5,8));