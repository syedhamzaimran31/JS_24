
//map
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const newArray = myArray.map((item) => item + 10);
// console.log(newArray)

//map will store new values from callback, after iterating callback on each element
const myArray_3 = myArray.map((item) => item % 2 == 0);
console.log(myArray_3)


//filter is used for checking and returns true values,
//filter iterate and filters the elements based upon condition
const myArray_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const newArray_2 = myArray_2.filter((item) => item + 10);
// console.log(newArray_2)