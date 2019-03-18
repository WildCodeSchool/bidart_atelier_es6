// function hello(firsName) {
//     return "Hello" + firsName + "welcome into the wild";
// }

const hello = firsName => `Hello ${firsName} welcome into the wild`;

console.log(hello("Sylène"));

const fruits = ["bananas", "oranges", "strawberries"];
const vegetables = ["carrots", ...fruits, "concomber"];

console.log(vegetables);
