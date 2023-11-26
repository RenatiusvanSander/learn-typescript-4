let studentScores = new Map([["john", 90], ["Pamela", 121], ["Tobias", 862]]);
console.log(studentScores.get("john"));
studentScores.set("Remy", 200);
console.log(studentScores.get("Remy"));
studentScores.delete("remy");
console.log(studentScores.has("Remy"));
console.log(studentScores);
console.log(studentScores.keys());
for (let key of Array.from(studentScores.keys())) {
    console.log(key);
    console.log(studentScores.get(key));
}
