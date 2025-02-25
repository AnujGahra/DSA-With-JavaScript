// selectionSort

const arr = [-2, -7, 1000, 5];

const selectionSort = (arr) => {
    for(let i=0; i<arr.length - 1; i++){
        let minIndex = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
        }
    }
    return arr;
    
}

console.log(selectionSort(arr));

// TC = O(N^2)