// reduced in js
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const initialValue = 100;
const reducedValue = myArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, initialValue);
// console.log(reducedValue);

const reducedValue_2 = myArray.reduce((acc, currValue) => acc + currValue, 0)
// console.log(reducedValue_2)

const cartItems = [
    {
        courseName: 'Python Course',
        price: 1
    },
    {
        courseName: 'Java Course',
        price: 2
    },
    {
        courseName: 'Web Dev Course',
        price: 3
    },
]

const totalPrice = cartItems.reduce((acc, itemPrice) => acc + itemPrice.price, 0);
console.log(totalPrice);



