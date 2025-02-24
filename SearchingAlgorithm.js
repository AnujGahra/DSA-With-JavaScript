// Linear Search in JavaScript
// Time Complexity best O(1), and worst O(N)

const arr = [1,2, 6, 9, 0, -5];
const linearSearch = (arr, target) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
};

console.log(linearSearch(arr, 9)) // 3
console.log(arr.includes(9)); // true
console.log(arr.indexOf(9))
console.log(arr.find((num) => num > 0));
console.log(arr.findIndex((num) => num < 0));


// String Method: match(), search(), indexOf(), includes()


// Binary Search in JavaScript , TC O(logN)

const BinarySearch = (arr, target) => {
    let start = 0, end = arr.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end)/2);

        if(arr[mid] == target){
            return mid;
        }else if(arr[mid] > target){
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}
console.log(BinarySearch(arr, 1))


// Binary Search using Recursion method
const BinarySearchRecur = (arr, target) => {
    return BinarySearchUtil(arr, target, 0, arr.length);
}

const BinarySearchUtil = (arr, target, start, end) => {
    if (start > end)
        return -1;

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    else if (arr[mid] > target) {
        return BinarySearchUtil(arr, target, start, mid - 1);
    }

    else {
        return BinarySearchUtil(arr, target, mid + 1, end);
    }
}


//  Search Insert Position

// Find floor and ceil value of X in an array
const floorCeil = (arr, target) => {
    let start = 0, end = arr.length;
    let floor = -1, ceil = -1;
    while(start <= end){
        let mid = Math.floor((start + end)/2);

        if(arr[mid] === target){
            floor = mid;
            ceil = mid;
            return [ceil, mid]
        }

        else if(arr[mid] > target){
            ceil = mid;
            end = mid - 1;
        }

        else {
            floor = mid;
            start = mid + 1;
        }
    }

    return [ceil, floor]
}