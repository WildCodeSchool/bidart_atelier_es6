const hello = firstName => console.log(`Hello ${firstName}, welcome into the wild !`)

const fruits = ['apple', 'pineapple', 'strawberry']
const vegetables = ['potato','tomato']

const fusion = [...fruits, ...vegetables]

console.log(fusion);

hello('Johnny');