const myArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let objArr = [
    {
        name: 'john',
        age: 12,
        gender: 'male'
    },
    {
        name: 'jane',
        age: 15,
        gender: 'female'
    },
    {
        name: 'julie',
        age: 20,
        gender: 'trans'
    },
    {
        name: 'hamza',
        age: 21,
        gender: 'female'
    },
    {
        name: 'Yousuf',
        age: 20,
        gender: 'male'
    },
    {
        name: 'Ebrahim',
        age: 23,
        gender: 'male'
    }
];


//forEach loops does not return an array, it returns undefined.
const returnFromArray = myArray.forEach((item) => {
    // console.log(item);
    return item;
});
//finding even Number with forEach
const newArr = [];
const returnFromArray_2 = myArray.forEach((item) => {
    if (item % 2 == 0) {
        newArr.push(item);
    }
});
// console.log(newArr);

// finding even Number with filter function
const evenNumbers = myArray.filter((item) => item % 2 == 0);
console.log(evenNumbers)

const olderThan20 = objArr.filter((item) => item.age >= 20 && item.name =="hamza");
console.log(olderThan20)