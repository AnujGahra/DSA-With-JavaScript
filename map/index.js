// Map in JavaScript

const map = new Map();
// const obj = new Object();
const obj = {};

map.set("name", "Vishal")
map.set(21, "age");
map.set(true, "isEducation")

console.log(map.delete("fsadf"))
console.log(map.has("name"));
console.log(map.get("name"))

map.set("name", "AnujK Kumar");

console.log(map, obj);


// Maps are iterable, but objects are not
map.forEach((value, key) => {
    console.log(`${key}: ${value}`)
});

map.clear();


// Sort Characters By Frequency
var frequencySort = function(s) {
    const map = new Map();
    for(let ch of s){
        map.set(ch, (map.get(ch) || 0) + 1);
    }
    const sortedMap = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));

    let resultString = '';
    for(let ch of sortedMap){
        resultString += ch.repeat(map.get(ch))
    }
    return resultString;
};
const obj1 = {};
const arr = [1000000].fill(0).map(() => Math.random()*10000000);
console.time("Obj time");

for(let i=0; i<arr.length; i++){
    obj[i] = arr[i]
}

console.timeEnd("Obj Time")

const map1 = new Map()
console.time("map time")

for(let i=0; i<arr.length; i++){
    map.set(i, arr[i])
}
console.timeEnd("Map Time")


// WeakMap in JavaScript

const map2 = new Map();
let obj2 = {"name":"Vishal"}
map2.set(obj2, "metadata")
console.log(map2)

obj2 = null

console.log(map2);

let Weakmap = new WeakMap();
Weakmap.set(obj2, "metadata");
console.log(Weakmap)
obj2 = null
console.log(Weakmap)



// Set in JavaScript

const set = new Set([1, 2,4, 5, 2, 1, 3]);
set.add(45);
set.delete(45);
console.log(set.has(4));

// set
console.log(set)



// Question 1: Union of two array.

const arr1 = [1, 4, 6, 2, 1, 3];
const arr2 = [7, 8, 1, 9, 3];
console.log([...new Set([...arr1, ...arr2])]);


// Question 2: Intersection of two array.
var intersection = function(nums1, nums2) {
    // let result = [];
    // for(let i=0; i<nums1.length; i++){
    //     for(let j=0; j<nums2.length; j++){
    //         if(nums1[i] === nums2[j] && !result.find((x) => x === nums1[i])){
    //             result.push(nums1[i]);
    //             break
    //         }
    //     }
    // }
    // return result;

    // method 2


    let result = new Set();
    let nums2Set = new Set(nums2);
    for(let i=0; i<nums1.length; i++){
        if(nums2Set.has(nums1[i]) && !result.has(nums1[i])){
            result.add(nums1[i]);
            break;
        }
    }
    return [...result];
};