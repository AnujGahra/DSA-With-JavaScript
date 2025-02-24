// How do you create an empty in JavaScript

const arr = [1,2,3,4, "Hello", {name:"Anuj"}, [6,7,8]];
const arr2 = new Array();
console
console.log(arr)

const firstElement = arr[0];
console.log(firstElement)

const arrLength = arr.length;
console.log(arrLength)

arr.pop();
console.log(arr);


// How do you loop through an array in JavaScript

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}


arr.forEach((val) => {
    console.log(val)
});

// for of loop
for(let x of arr){
    console.log(x);
}


// Question:1:- How do you check if an element exists in an array?

const findElement = (arr, target) => {
    for(let x of arr){
        if(x === target){
            return true;
        }
    }
     return false;
};

console.log(findElement(arr, "Hello"));
console.log(findElement(arr, "H"));

console.log(arr.includes(4));


// Question:2:- How do you check if an element exists in an array?

const findElementIndex = (arr, target) => {
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
     return -1;
};

console.log(findElementIndex(arr, 4))
console.log(arr.indexOf(4));


// How to delete, add & Update element from specific index
console.log(arr);
// delete
arr.splice(1, 3)
console.log(arr)

// add
arr.splice(1, 0, 67,87,45,22,12);
console.log(arr);


// splice vs slice

const array = [2,3,4,5,6]
const subArray = array.slice(1, 4) // start, end
console.log(subArray)

const spliceSubArray = array.splice(1, 4)
console.log(spliceSubArray)

console.log(array.splice(1,3))

// deep copy vs shallow copy

// Shallow copy of Array
const arrayB = array;
arrayB.splice(1, 4);
console.log(arrayB, array)

// Deep copy
const arr21 = [12,12,22,11,22]
const arrC = [...arr21];
const arrD = Array.from(arr21)
const arrE = arr21.concat();
arrC.splice(1, 4);
console.log(arr21, arrC)


// Question:3:- How to add two array in JavaScript

const arrF = [12,34,56,67];
const arrG = [23,56,678,89,90];
const arrM = [...arrF, ...arrG]
const arrayC = arrF.concat(arrG)
console.log(arrM)
console.log(arrayC)


// Question:4:- How can you check if two arrays are equal?


const isArrayEqual = (arr1, arr2) => {
    // if(arr1.length !== arr2.length){
    //     return false;
    // }

    // for(let i = 0; i<arr1.length; i++){
    //     if(arr[i] !== arr2[i]){
    //         return false;
    //     }
    // }
    // return true;


    // method 2
    return arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i])
}

console.log(isArrayEqual([1,2,3], [1,2,3]))


// Question: 4:- How to sort an array in ascending and desending order ?

const x= [1,4,2,5,7,-9,-5,0]
x.sort(); // O(NlogN)
console.log(x)


// desending
x.sort((a, b) => b - a);
console.log(x);


// Question 5:- How to reverse an array?
x.reverse();
console.log(x);



// Map, filter & Reduce
const newMapArr = x.map((ele, i) => ele*ele);
console.log(newMapArr)

const positiveNumbers = x.filter((ele, i) => ele > 0);
console.log(positiveNumbers);


const sumOfArr = positiveNumbers.reduce((acc, num) => acc + num , 0);
console.log(sumOfArr);


// Flat
const y = [1,2,[4,5,[6,7]], 8,9];
const flattedArray = y.flat(2);
console.log(flattedArray);


// filter vs find
const positiveNumber = x.find((ele, i) => ele > 0);
console.log(positiveNumber);