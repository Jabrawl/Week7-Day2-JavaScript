// # Find Smaller Numbers
// # Given the array nums, for each num find out how many numbers in the array are smaller than it. 
// # Return the answer in an array.

// # Example 1:
// # Input: nums = [8,1,2,2,3]
// # Output: [4,0,1,1,3]
// # Explanation:
// # For nums = 8 there exist four smaller numbers than it (1, 2, 2 and 3).
// # For nums = 1 does not exist any smaller number than it.
// # For nums = 2 there exist one smaller number than it (1).
// # For nums = 2 there exist one smaller number than it (1).
// # For nums = 3 there exist three smaller numbers than it (1, 2 and 2).

// # Example 2:
// # Input: nums = [6,5,4,8]
// # Output: [2,1,0,3] 

// # Example 3:
// # Input: nums = [7,7,7,7]
// # Output: nums = [0,0,0,0]


// function findNums(arr, current = 0){
//     var theCount = 0
//     for (let i = 0; i < arr.length; i++){
//         if (i == current) {
//             continue
//         } else if (arr[i] < arr[current]) {
//             theCount++
//         }
//     }
//     if (current == arr.length) {
//         return []
//     } else {
//         output = findNums(arr, current += 1)
//         return output
//     }

// }

// nums = [6,5,4,8]
// console.log(findNums(nums))



// The Switch Case

let day = new Date().getDay();

// Let day = 5

let literalDay = new Date().toString()

console.log(day)

console.log(literalDay)


// Switch Case Syntax
switch (day) {
    case 0:
        console.log("Sleep in and have a nice time... ITS SUNDAY");
        break;
    case 1:
        console.log("Boo its Monday");
        break;
    case 2:
        console.log("Yay Taco Tuesday!");
        break;
    case 3:
        console.log("Watering Wednesday, water your plants!");
        break;
    case 4:
        console.log("Its Thursday, time to Smash! and inevitablely get rekt by college students :(");
        break;
    case 5:
        console.log("Gotta get down on Friday! Praise Rebecca");
        break;
    case 6:
        console.log("Five hours of Summer, once a week. One Saturday Morning!");
        break;
}


switch(literalDay.split(" ")[0]) {
    case 'Sun':
        console.log("It's Sunday, we're playing volleyball");
        break;
    case 'Mon':
        console.log('Munchie Monday');
        break;
    case 'Tue':
        console.log('Trying Tuesday');
        break;
    case 'Wed':
        console.log('Weeping Wednesday also it is Wednesday my dudes, nyaaahhhhhhh');
        break;
    case 'Thu':
        console.log('Thirsty Thursday, stay hydrated. Drink Water');
        break;
    case 'Fri':
        console.log('Friyay, amiright....');
        break;
    case 'Sat':
        console.log('Mow the yard')

    default:
        console.log('Again, not a real day. Please try again....')
}


// JS OBJECTS

let person = {
    name: 'Bill',
    age:28,
    fav_color:'Red'

}

console.log(person['name'])
console.log(person.age)

// more complex object JS
let person2 = {
    name: 'Max',
    age: 31,
    prog_languages: ['JavaScript', 'Python', 'C++', 'Java'],
    fav_color: 'Blue',
    teams: [
        {
            baseball: 'Chicago White Sox',
            football: 'Philadelphia Eagles',
            hockey: 'Chicago Blackhawks',
            basketball: ['Chicago Bulls', 'Philadelphia 76ers'],
            soccer: ['Chicago Fire', ]
        },

        {
            baseball: 'Texas Roadhouse',
            football: 'Kentucky Fried Chicken',
            basketball: 'Washington Wizards',
            soccer: ['Philly Union', 'FC Dallas']
        }
    ]
}

console.log(Object.keys(person2))
console.log(Object.values(person2))

for (let i = 0; i < person2.length; i++){
    console.log(person2[i])
}

for (let i = 0; i < Object.keys(person2).length; i++) {
    console.log(Object.keys(person2)[i])
}

for (let i = 0; i < Object.keys(person2).length; i++){
    if (Array.isArray(Object.values(person2)[i])) {
        console.log(Object.values(person2)[i])
    }
}

// console.log every chicago team from person2
for (let i in Object.keys(person2)){
    if (typeof(Object.values(person2)[i]) === 'string' && Object.values(person2)[i].includes('Chicago')){
        console.log(Object.values(person2)[i])
    } else if (Array.isArray(Object.values(person2)[i])){
        for (let j in Object.values(person2)[i]){
            if (typeof(Object.values(person2)[i][j]) === 'string'){
                if (Object.values(person2)[i][j].includes('Chicago')){
                    console.log(Object.values(person2)[i][j])
                }
            } else {
                for (let k in Object.keys(Object.values(person2)[i][j])){
                    if (Object.values(Object.values(person2)[i][j])[k].includes('Chicago')){
                        console.log(Object.values(Object.values(person2)[i][j])[k])
                    } 
                    for (let l in Object.values(Object.values(person2)[i][j])[k]){
                        if (Object.values(Object.values(person2)[i][j])[k][l].includes('Chicago')){
                            console.log(Object.values(Object.values(person2)[i][j])[k][l])
                        }
                    }
                }
            }
        }
    }
}

person2.teams.forEach(team => {
    Object.values(team).forEach(value => {
        if (Array.isArray(value)) {
            value.forEach(v => {
                if (v.includes("Chicago")) console.log(v);
            });
        } else if (value.includes("Chicago")) console.log(value);
    });
});



function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    this.printInfo = function (wheels = 0, color) {
        console.log(`This is a ${this.year} ${this.make} ${this.model} and has ${wheels} wheels`);

        return 'Returned Value'
    }
}

let myCar = new Car("Chevy", "Impala", 2009)

myCar.printInfo(4, 'Blue')


class Human {
    constructor(name, age, hobby){
        this.age = age,
        this.name = name,
        this.hobby = hobby
    }

    printInfo() {
        return `Name: ${this.name} \nAge: ${this.age} \nHobby: ${this.hobby}`
    }
}

let link = new Human('Link', 118, 'saving hyrule')

console.log(link.printInfo())



class Baby extends Human {
    constructor(name, age, hobby, walking) {
        super(name, age, hobby)
        this.walking = walking
    }

    isBabyWalking() {
        if (this.walking == true){
            return `Oh lawd, ${this.name} is comin`
        } else {
            return `${this.name} isn't walking yet, thank goodness`
        }
    }
}


let little_johnnie = new Baby('Lil Johnny', 1, 'crawl', true)
console.log(little_johnnie.printInfo())
console.log(little_johnnie.isBabyWalking())


// --JavaScript Closure-- //
/**
 * 
 * A closure is a self-invoking function that only runs once.
 * it can then set a variable(which in our case will be a counter) and 
 * returns a function expression
 * 
 * For the example below, we will add to a number after the 
 * initial call to the closure has been made 
 * 
 * JavaScrupt Closures are another tupe of variable that can be created
 */

let count_up = (function () {
    let counter = 0;
    console.log('Hit')
    return function () { return counter ++}
})()


let addNames = (function () {
    let names = [];
    console.log('Adding Names')
    return function(name) {
        console.log(names)
        return names.push(name)
    }
})()



// -- JavaScript Callbacks -- //

/**
 * 
 * A callback is a function that is to be executed after another function
 * has finished its execution -- hence the name callback
 * 
 * In JavaScript, functions are objects. Because of this, functions can take
 * other functions as arguments(parameters and can return functions by
 * other functions
 * 
 * Functions that do this are called "higher-order functions". Any function
 * that is passed as an argument is called a "Callback Function"
 * 
 * POR QUE?
 * 
 * Porque of the JavaScript Event Loop. In a nutshell, Javascript is
 * an event driven language which means instead of waiting for a response
 * Javascript will keep executing while listening for the other events
 * 
 */

function first() {
    console.log(1)
}

function second() {
    console.log(2)
}

first()
second()


function firstDelay() {
    setTimeout(function () {
        console.log(1)
    }, 2000)
}

function secondDelay() {
    console.log(2)
}

firstDelay()

secondDelay()



function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework`)
    callback()
}

// doHomework('JavaScript', function(){
//     console.log('Done with homework')
// })



/*
Though callbacks give us more functionaloty...they also introduce their own 
problem......Callback Hell

Something that looks like this:
function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here...
                })
            })
        })
    })
})

*/

const isEvenNumber = (num) =>{
    return new Promise((resolve, reject) => {
        if (num % 2 == 0) {
            resolve(num)
        } else {
            reject(num)
        }
    })
}

isEvenNumber(9)

    .then((result)=> {
        console.log(`Even Number: ${result}`)
    })

    .catch((error)=> {
        console.log(`Odd Number: ${error}`)
    })



function slow_addition(n1, n2) {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(n1+n2), 3000})
    })
}


function increase_salary(base, increase) {
    const new_salary = slow_addition(base, increase);
    console.log(`New Salary: ${new_salary}`)
    return new_salary
}


// increase_salary(35000, 10000)


async function asyncSalary(base, increase) {
    const new_salary = await slow_addition(base, increase)
    console.log(`The new salary is: ${new_salary}`)
    return new_salary
}

asyncSalary(60000, 20000)