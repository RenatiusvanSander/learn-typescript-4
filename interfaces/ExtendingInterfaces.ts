interface Exterior {
    color:string;
    numOfDoors:number;
}

interface Interior{
    seats:number;
    auto:boolean;
}

interface Car extends Exterior, Interior {
    make:string;
    model:string;
    year:number;
}

var myCar : Car = {
    make:"Hoda",
    model: "MyCar",
    year: 1234,
    color: "red",
    numOfDoors:3,
    seats: 4,
    auto: true
};