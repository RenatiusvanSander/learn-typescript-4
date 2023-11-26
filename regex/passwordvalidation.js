var password = "tesT1234";
var regEx = /(?=.*[A-Z])(?=.*[a-z])\w{4,10}/;
if (password.match(regEx)) {
    console.log('Valid Password');
}
else {
    console.log('Invalid Password ' + password);
}
