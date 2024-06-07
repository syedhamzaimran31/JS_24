const myArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];


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
console.log(newArr);

// finding even Number with filter function
const evenNumbers = myArray.filter((item) => item % 2 == 0);
console.log(evenNumbers)