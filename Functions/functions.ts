function hello(name:string):string{
    return "Hello" + name;
}

console.log(hello("RemyMeier"));

function add(num1:number,num2:number):number {
    return num1+num2;
}

function calculator(fun:any):void {
    console.log(fun(10,20));
} 

console.log("Sum is: "+add(10,20));

function display(id:number,name:string,role:string="Normal") {
    console.log("Id", id);
    console.log("Name",name);
    console.log("Role", role);
}

display(1,"Remy");

calculator(add);