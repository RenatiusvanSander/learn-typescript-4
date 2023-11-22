class Check {
    static bankName:string = "Bank Of America";
    customerName:string;
    accNo:number;
    routingNo:number;
}

var check =new Check();
Check.bankName = "BOA";

var check2 = new Check();
check2.accNo;

console.log(Check.bankName);