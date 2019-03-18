// Babel est un compileur qui change de l'ES6 à l'ES5 car ES6 n'est pas encore pris en charge partout


// Les changements d'ES6***************************************************************************

// Les backticks (altgr 7)
let name = 'Louis'
// console.log(`Bonjour ${name}. Comment vas-tu ?`);


// La fat arrow
const myFunction = () => {
    //Bloc de code
}

//Le "Spread operator" (regarder le slide sur le drive)

t1 = [1, 2, 3];
t2 = [6, 7, t1] // renvoi un tableay dans un tableau
t2 = [6, 7, ...t1] // renvoi toutes les valeurs dans le même tableau

//ATELIER******************************************************************************************

const hello = firstName => {console.log(`Hello ${firstName}. Welcome to the wild!`)};


hello('Louis');

const fruits = ['Bananas', 'Oranges', 'Strawberry'];
const veggies = ['Carrots', 'Louis', ...fruits];

console.log(veggies);



