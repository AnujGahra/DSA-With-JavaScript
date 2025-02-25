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


// 6:16:00