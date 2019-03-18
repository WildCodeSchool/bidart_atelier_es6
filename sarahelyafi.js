
// ATELIER ES6
//1-réecrire la fonction en utilisant une fonction fléchée et un string template

/*function hi(firstname) {
    return "Hi" + firstname + "welcome intro wild";
}


//2-utiliser le spread operator pour concaténer le contenu des 2 tableaux

const fruits = ["bananas","oranges", "strawberries"];
const vegetables = ["carrots", "beans", "brocolis" ]
*/

//1
const hello = (firstName) => `Hi ${firstName}, welcome into the wild`;  
console.log(hello("Wild Patator"));


//2
const fruits = ["tomatoes", "blueberries", "strawberries"];
const vegetables = ["carrots", "beans", "brocolis"];

const fruitsAndVegetables = [...fruits, ...vegetables];
console.log (fruitsAndVegetables);


