// Object in JavaScript

const person = {
    name: "Anuj",
    age: 21,
    isEducator: false,
    skills: ["C/C++", "JavaScript", "TypeScript", "ReactJS"],
    projects: {
        "NextLearn":"Full Stack Developer"
    },
    code: function(){
        return "start coding";
    },
    walk: () => {
        return "Start walking";
    }
};

// How to access
console.log(person.name)
console.log(person["age"])
console.log(person.code())


// How to find key in the object
console.log(person.hasOwnProperty("code"))

// How to add, delete and update keys
person.name = "Anuj Gahra"
console.log(person.name)

person.Student = true

delete person.isEducator
console.log(person)


// Shallow and Deep Copy in Object

// Shallow Copy
const person2 = person
person2.isEducator = false;



// Deep Copy
const person3 = Object.assign({}, person)
// Nested Objects still do shallow copy here, there for we use lodash cloneDeep method(out of scope for this course)
person3.skills = null;

// Keys, Values & Enteries
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))


// Loop through an Object
// for .. in

for(let key in person){
    console.log(key + ":", person[key])
};

// forEach loop
Object.keys(person).forEach((key) => console.log(key))

// How to check that two object is equal
console.log(Object.is(person, person3))


// find count of all players

const data = {
    id: 1,
    name: ["P1", "P4"],
    next: {
        id: 2,
        name: ["P3"],
        next: {
            id: 3,
            name: ["P3", "P4", "P5"],
            next: {
                id: 4,
                name: ["P1", "P2", "P4"],
                next: {
                    id: 5,
                    name: ["P2", "P3", "P5"],
                    next: null
                }
            }
        }
    }
};

const playerCount = (data) => {
    if(data === null){
        return {}
    }

    let countPlayer = {}
    for(let player of data.name){
        countPlayer[player] = (countPlayer[player] || 0) + 1;
    }
    const nextPlayerCount = playerCount(data.next);

    for(let key in nextPlayerCount){
        countPlayer[key] = (countPlayer[key] || 0) + nextPlayerCount[key]
    }
    return countPlayer;
}

const countPlayer = playerCount(data);
console.log(countPlayer) // {p1: 2, p4: 3, p3: 3, p2: 2: p5: 2}


// Prototype and Inheritance in JavaScript Objects
const obj1 = {
    name: "Vishal"
}

const obj2 = {
    age: 21,
    __proto__: obj1
}

console.log(obj2.name);