// Recursion


// print fun n times
// function fun(n){
//     if(n == 0) return;
//     console.log("This is recursion function.")
//     fun(n-1);
// }

// fun(10);


// Factorial of a number
function factorial(n){
    if(n === 0){
        return 1;
    }
    return n*factorial(n-1);
}

console.log(factorial(5));


// Sum of Array: Given an array, return sum of it's elements

function sumOfArrays(arr, n){
    if(arr.length === 0){
        return 0;
    }
    return arr[arr.length - 1] + sumOfArrays(arr.slice(0, arr.length - 1));
};

console.log(sumOfArrays([1,2,3,4,5], 5));


// Fibonacci sewries: 0, 1,1,2,3,5,8,13
function fibo(n){
    if(n<2){
        return n;
    }

    return fibo(n-1)+fibo(n-2);
};
console.log(fibo(7))