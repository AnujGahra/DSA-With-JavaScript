// Question: sum of all natural numbers from 1 to n.

// sum of 1 to 5: 15  and with formula is n*(n+1)/2

function sumOfNaturalNumber(num){
    let sum = 0;
    for(let i = 1; i<=num; i++){
        sum += i;
    }

    return sum;
};


console.log(sumOfNaturalNumber(5));


// Question:2:- Sum of digits of a number

function sumOfDigits(num){
    let sum = 0;
    while(num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
};

console.log(sumOfDigits(2435));  // Time Complexity O(log N)

// Question:3:- Count the number of digits a number

function countDigits(num){
    num = Math.abs(num);
    let count = 0;
    do {
        count ++;
        num = Math.floor(num / 10);
    } while (num > 0);

    return count
};

console.log(countDigits(12434));



// Question:4:- Plandrome number

var isPalindrome = function isPalindrome(num){
    let copyNum = num, reverseNum = 0;


    while(copyNum > 0){
        const lastDigit = copyNum % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        copyNum = Math.floor(copyNum/10);
    }

    return num === reverseNum
}

isPalindrome(121);


// 509. Fibonacci Number
if(n < 2){
    return n;
}

let prev = 0, curr = 1, next;
for(let i=2; i<=n; i++){
    next = prev + curr;
    prev = curr;
    curr = next;
}

return next;


// Missing Number
var missingNumber = function(nums){
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
    }

    return nums.length*(nums.length+1)/2 - sum;
};