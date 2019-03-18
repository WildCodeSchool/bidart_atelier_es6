/*function hello(firstName){
    return 'Hello' + firstName + 'welcome into the wild';
}
*/
const hello = firstName => {console.log(`Hello ${firstName} welcome into the wild`);}

hello('stef');


const fruits = ['bananas', 'oranges', 'strawberries'];
const vegetables = ['carrots', 'Louis', ...fruits];

console.log(vegetables);