let cell:string = "1234567890";
let re:any = /[0-9]{10}/;
if(cell.match(re)) {
    console.log("Cell number is valid");
} else {
    console.log("invalid cell number " + cell);
}