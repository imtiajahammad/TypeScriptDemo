"use strict";
let Lname = 'John';
//Lname = 10;
//#region string-start
let lname;
lname = "Santosh";
let newname = lname.toUpperCase();
console.log(newname);
//#endregion string-end
//#region number-start
let age;
age = 25;
age = 25.5;
// age = "25";
let dob = "25";
let result = parseInt(dob);
console.log(result);
//#endregion number-end
//#region boolean-start
let isValid;
console.log(isValid);
//#endregion boolean-end
//#region array-start
let enplist = [];
let emplist2;
let deplist;
emplist2 = ["Santosh", "Santosh1", "Santosh3"];
let numlist;
numlist = [1, 2, 3, 4, 5];
let result2 = numlist.filter((num) => num > 2);
console.log(result2);
let num = numlist.find((num) => num === 2);
console.log(num);
let num2 = numlist.find((num) => num === 7);
console.log(num2);
let emp = emplist2.find((em) => em === "Santosh");
console.log(emp);
//let sum6 = numlist.reduce(acc, num) => acc + num);
//console.log(sum6);
//#endregion array-end
//#region enum-start
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Blue;
;
let c2 = 2 /* Blue */;
//#endregion enum-end
//#region tuple-start
let swapNumbers3;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbers3 = swapNumbers(10, 20);
swapNumbers3[0];
swapNumbers3[1];
//#endregion tuple-end
//#region any-start
let department;
department = "IT";
department = 19;
function add(num1, num2) {
    return num1 + num2;
}
let newSum = add(19, 33);
//#endregion any-end
