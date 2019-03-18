//Réécrire la fonction suivante en utilisant une fonction fléchée et une template string.

/*function hello(firstName) {

    return "Hello " + firstName + "welcome into the Wild.";
    
    }*/

const hello = firstName => {return `Hello ${firstName} welcome into the Wild.`};
console.log(hello('Vanessa'));


//Utiliser le spread operator pour concaténer le contenu des 2 tableaux.

const fruits = ["Bananas", "Oranges", "Strawberries"];

const vegetables = ["Cabbages", "Carotts"];

// expected array: ["Bananas", "Oranges", "Strawberries", "Cabbages", "Carotts"]

const fruitsVegetables = [...fruits, ...vegetables];
console.log(fruitsVegetables);


