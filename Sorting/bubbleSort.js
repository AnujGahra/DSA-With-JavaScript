// Sorting in JavaScript

// Sort an Array

const arr = [-2, -7, 1000, 5];
console.log(arr.sort()) // [ -2, -7, 1000, 5 ]
console.log(arr.sort((a, b) => a - b)) // [ -7, -2, 5, 1000 ]
console.log(arr.sort((a, b) => b - a)) // [ 1000, 5, -2, -7 ]


// Sort a String
const str = "Anuj";

console.log(str.split("").sort().join("")) // Ajnu



// BubbleSort 
const bubbleSort = (arr) => {
    let swapped;
    do{
        swapped = false;
        for(let i=0; i<arr.length - 1; i++){
            if(arr[i]> arr[i + 1]){
                // let temp = arr[i];
                // arr[i] = arr[i+1];
                // arr[i+1] = temp;
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swapped = true;
            }
        }
    } while(swapped)
        return arr;
}

console.log(bubbleSort(arr))