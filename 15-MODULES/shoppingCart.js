// Exporting Module
console.log("Exporting Module");

const shippingCost = 10;
export const cart = [];

// NAMED EXPORT
export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;


// EXPORTING MULTIPLE VARIABLES
export { totalPrice, totalQuantity as tq };

// USING A DEFAULT EXPORT
export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
};