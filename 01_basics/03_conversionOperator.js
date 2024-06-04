let vlaue_1 = 39;
console.log(typeof vlaue_1);

let vlaue_2 = "35";
console.log(typeof vlaue_2);

let vlaue_2_inNumber = Number(vlaue_2);
console.log(typeof vlaue_2_inNumber);

//if NAN is converted in js
const vlaue_3 ="33abcdefghijklmnopqrstuvwxyz"
const vlaue_3_inNumber = Number(vlaue_3) 

console.log(typeof vlaue_3_inNumber)       //Important that type of vlaue_3_inNumber will be shown as number
console.log(vlaue_3_inNumber)              //NAN will be stored because it can not be converted into numbers   


// if null is converted in js
let value_4=null
let value_4_inNumber =Number(value_4);

console.log(typeof value_4_inNumber)
console.log(value_4_inNumber)

//if undefined is converted in js
let value_5=undefined
let value_5_inNumber =Number(value_5);

console.log(typeof value_5_inNumber)
console.log(value_5_inNumber)

//if boolean is converted in js

let value_6=true
let value_6_inNumber =Number(value_6);

console.log(typeof value_6_inNumber)
console.log(value_6_inNumber)


