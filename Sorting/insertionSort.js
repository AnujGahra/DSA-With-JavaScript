// Insertion Sort

const arr = [-2, -7, 1000, 5];


const insertionSort = (arr) => {
    for(let i=1; i<arr.length; i++){
        let current = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}

console.log(insertionSort(arr)) // -7, -2 , 5, 1000