function hello(name) {
    return "Hello" + name;
}
console.log(hello("RemyMeier"));
function add(num1, num2) {
    return num1 + num2;
}
console.log("Sum is: " + add(10, 20));
function display(id, name, role) {
    if (role === void 0) { role = "Normal"; }
    console.log("Id", id);
    console.log("Name", name);
    console.log("Role", role);
}
display(1, "Remy");
