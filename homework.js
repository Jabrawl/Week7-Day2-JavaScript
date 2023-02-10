//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavorites(person) {
    for (let key in person) {
        if (typeof person[key] === 'string') {
            console.log(person[key]);
        } else if (Array.isArray(person[key])) {
            person[key].forEach(item => {
                if (typeof item === 'string') {
                    console.log(item);
                } else if (typeof item === 'object') {
                    for (let subKey in item) {
                        console.log(item[subKey]);
                    }
                }
            });
        }
    }
}

displayFavorites(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printInfo = () => {
        console.log(`Our Person's Name Is: ${this.name} \nOur Person's Age Is: ${this.age}`)
    };

    growup = () => {
        this.age++
    };
}

let james = new Person('James', '10')
let ryan = new Person('Ryan', '10')
james.growup()
james.printInfo()
ryan.printInfo()


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const stringSize = stringy => {
    return new Promise((resolve, reject) => {
        if (stringy.length > 10) {
            resolve(stringy)
        } else if (stringy.length < 10) {
            reject(stringy)
        }
    })
}

stringSize("1234567890")

    .then((result)=> {
        console.log('Big word')
    })

    .catch((error)=> {
        console.log('Small Number')
    })


// SOLVING CODEWARS PROBLEM WITH JS 1: https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
function toCamelCase(str) {
    if (str === '') {
        return '';
    }
    let words = str.split(/[-_]+/);
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    } 
    if (words[0].charAt(0) == words[0].charAt(0).toUpperCase()) {
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    } 
    return words.join('');
}


// SOLVING CODEWARS PROBLEM WITH JS 2: https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
function count (string) {  
    const my_object = {}
    for (let i = 0; i < string.length; i++) {
      if (string[i] in my_object) {
        my_object[string[i]] += 1
      } else {
        my_object[string[i]] = 1
      }
    }
    
    return my_object
  }