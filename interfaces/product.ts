interface Product {
    id:number;
    name:string;
    description:string;
    price:number;
    display():void;
}

var product1:Product = {
    id:123,
    name:"Remy",
    description:"Remy product",
    price:12.56,
    display():void {
        console.log(this.id + " " + this.name);
    }
}

var product2:Product = {id:123,
    name:"Remy",
    description:"Remy product",
    price:12.56,
    display():void {
        console.log(this.id + " " + this.name);
    }
}