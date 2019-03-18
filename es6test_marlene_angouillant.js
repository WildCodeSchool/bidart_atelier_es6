// Réecrire la fonction suivante en utilisant une fonction fléchée
// et un template string
function hello(firstName) {
    return "Hello" + firstName + "welcome into the Wild";
}

const hello1 = firstName => (`Hello ${firstName} welcome into the wild`)
console.log(hello1("Marlene"))




// utiliser le spread operator pour concaténer le contenu des 2 tableaux
const fruits = ["bananas", "orange", "strawberries"];
const vegetables = ["carrots", "Louis"];

const newArray = [...fruits, ...vegetables]
console.log(newArray);
