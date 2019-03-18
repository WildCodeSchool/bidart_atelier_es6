// réécire la fonction suivante en utilisant une fonction fléchée et un template string
function hello(firstName){
    return "Hello" + firstName + "welcome into the wild";
}

const nextHello = (firstName) => `hello ${firstName} welcome into the wild`;
console.log(nextHello("Basile"));

// utiliser le spread operator pour concaténer le contenu des 2 tableaux
const fruits = ["bananas", "oranges", "strawberries"];
const vegetables = [ "carrots", "louis"];
const fruitsAndVegetables =[...fruits,...vegetables];
console.log(fruitsAndVegetables);

