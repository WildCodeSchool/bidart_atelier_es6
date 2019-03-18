

// réécrire la fonction suivante en utilisant une fonction fléchée et un template string

// function hello(firstName) {
//     return "Hello" + firstName + " welcome into the wild";
// }

hello = firstName => (`Hello ${firstName}, welcome into the wild`)

console.log(hello('jim'));

// Utiliser le spread operator pour concaténer le contenu des 2 tableaux

const fruits = ["bananas", "oranges", "strawberries"];
const vegetables = ["carrots", "Louis"];

const newArray = [...fruits, ...vegetables];
console.log(newArray)

