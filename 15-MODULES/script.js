// Importing Module
// we can also import using an alias
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// we can import everthing as an global alias
import * as ShoppingCart from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';

// call the method from the global alias
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice)

// console.log("Importing Module");

// addToCart('bread', 5);
// console.log(price, tq);

add('pizza', 2);
add('bread', 5);
add('apples', 3);

console.log(cart);

// USING TOP-LEVEL AWAIT 
const response = await fetch('https://jsonplaceholder.typicode.com/posts');

const data = await response.json();
console.log(data);


