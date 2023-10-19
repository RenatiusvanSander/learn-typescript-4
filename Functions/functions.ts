function hello(name:string):string{
    return "Hello" + name;
}

console.log(hello("RemyMeier"));

function add(num1:number,num2:number):number {
    return num1+num2;
}

function calculator():any {
    function subtract(num1:number,num2:number):number {
        return num1-num2;
    }

    return subtract;
} 

console.log("Sum is: "+add(10,20));

function display(id:number,name:string,role:string="Normal") {
    console.log("Id", id);
    console.log("Name",name);
    console.log("Role", role);
}

display(1,"Remy");

var sub = calculator();
console.log(sub(20,5));
console.log(calculator()(20,5));