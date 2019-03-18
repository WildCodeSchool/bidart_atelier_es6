// Réécrire la fonction suivante en utilisant une fonction fléchée
// et un template string

let firstName = 'Nicolas';

// function hello(firstName) {
//     return (`hello ${firstName} welcome into the wild`);
// }

// => === return

const hello = (firstName) => `hello ${firstName} welcome into the wild`;


console.log(hello(firstName));

// Utiliser la spread operator pour concaténer le contenu des 
// 2 tableaux

const fruits = ["bananas", "oragnes", "strawberries"];
const vegetables = ["carrots", "Louis"];

console.log([...fruits, ...vegetables]);