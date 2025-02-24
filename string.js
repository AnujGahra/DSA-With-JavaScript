// String in JavaScript

const firstName = "Vishal"
console.log(firstName)

// string length
console.log(firstName.length);

// Access string element
console.log(firstName.charAt(3))
console.log(firstName[4])
console.log(firstName.charCodeAt(3))

// any character present or not in string
console.log(firstName.includes("i"));
console.log(firstName.indexOf("h"));
console.log(firstName.lastIndexOf("h"));


let anotherName = "Vishal";
console.log(firstName.localeCompare(anotherName));

// replace vishal with Anuj
const str = "Vishal is Best Frontend Developer"
console.log(str.replace("Vishal", "Anuj"))


// replace from multipile position
const str1 = "Vishal is Best Frontend Developer, Vishal is also Backend developer."
console.log(str1.replaceAll("Vishal", "Anuj"));
// console.log(str1.replace("/Vishal/g", "Anuj"));

// subString of a string
console.log(str1.substring(6, 10));
console.log(str1.slice(6, 30));
console.log(str1.slice(-10, -1));

// 
console.log(str.search("Best"));

console.log(str.split(""));

const subString = str.split(" ");
console.log(subString.join("🙈 "));

console.log(str.startsWith("Vishal"));
console.log(str.endsWith("Developer"))


// Trim and Case Conversion 

const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();
console.log(trimStr, trimStr.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());



// Convert Number and Object to String

const num = 123;
console.log(num, +num, num.toString());


const obj = {
    name: "Vishal",
    course: "DSA with Vishal"
};
console.log(obj, JSON.stringify(obj));


// Concatenate Strings
const lastName = "Rajput";
console.log(firstName + lastName);
console.log(`${firstName} ${lastName} is a Best Developer`);
console.log(firstName.concat(lastName, " is a", " Best"));


// Valid Anagram
var isAnagram = function(s, t){
    return s.split("").sort().join("") === t.split("").sort().join("");
};



// Longest Common Prefix

var mergeAlternately = function(word1, word2) {
    let ans = ""
    for(let i=0; i<max(word1.length, word2.length); i++){
        if(i<word1.length){
            ans += word1[i];
        }
        if(i<word2.length){
            ans += word1[i];
        }
    }
    return ans;
};


// 
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").at(-1).length
};