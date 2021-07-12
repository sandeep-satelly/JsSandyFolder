/* //Activating Strict mode
'use strict' // Helps us in indentiying code changes throwing error which we might miss
let hasDriversLicense = false
const passTest = true

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`) */

/* //Functions - Piece of used which we can re-use overall project

function logger() {
    console.log(`My name is Sandy`)
}

// logger()  Invoking / Calling / Running Functions is by calling name with '()'

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice
}

const juiceAfter = fruitProcessor(5, 10)
console.log(juiceAfter)

console.log(fruitProcessor(3, 6)) */

/* function calcAge1(birthYear) {
    return 2021 - birthYear
}
console.log(`The current age is ${calcAge1(1993)}`)

//new type where we declare funciton with out name mentioned and assigning directly to a variable
const calcAge2 = function (birthYear) {
    return 2021 - birthYear
}

console.log(`The current age with new function is ${calcAge2(1993)}`) */
/*
//ARROW FUNCTION - We can avoid function keyword
// Without using return keyword for 1 lines
// for multi line we would need return statement
//Arrow functoin cannot use This keyword hence is not used ALOT

const calcAge3 = birthYear => 2021 - birthYear
//console.log(calcAge3(1993))

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement}`
}

console.log(yearsUntilRetirement(1993, `Sandy`))
console.log(yearsUntilRetirement(1992, `Nani`))
 */

//Function calling other functions
/*
function cutFruitPieces(fruit) {
    return fruit * 5
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges and the pieces are apple = ${applePieces} and oranges = ${orangePieces}`
    return juice
}

const juiceAfter = fruitProcessor(5, 10)
console.log(juiceAfter) */

/* const calcAge3 = birthYear => 2021 - birthYear

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge3(1993)
    const retirement = 65 - age
    if (retirement > 0) {
        return `${firstName} retires in ${retirement}` // nothing will execute after return
    } else {
        return -1 // Generally used to indicate a unknown value we can use 9999 also any number which doesn't make sense
    }
}

console.log(yearsUntilRetirement(1993, `Sandy`))
console.log(yearsUntilRetirement(1992, `Nani`)) */
/*
// 3 typesof writing FUNCTIONS
function 'functionName'(parameters){
    return 'What we want to return'
}
example
function calcAge(birthYear){
    return 2021 - birthYear
}

---------------------------
declare variable = function (parameters){
    return 'What we need to return'
}
 Example
 const calcAge = function (birthYear){
     return 2021 - birthYear
 }
---------------------------------------
Declare variable = parameters '=>' what we want to return with out return statement if it's 1 line
if it's more than 1 line use '{}' and return key word also
 const calcAge = birthYear => 2021 - birthYear

 */
/*
//const dolphinAvg = Math.floor((44 + 23 + 71) / 3)
//const koalaAvg = Math.floor((65 + 54 + 49) / 3)

const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3
const dolphinScore = calcAvg(44, 23, 71)
const koalaScore = calcAvg(65, 54, 49)
const checkWinner = function (dolphinAvg, koalaAvg) {
    if (dolphinAvg > 2 * koalaAvg) {
        console.log(`Dolphins win trophy`)
        return `Dolphins win (${dolphinAvg}> ${koalaAvg})`
    }
    else if (koalaAvg > 2 * dolphinAvg) {
        console.log(`Koala win trophy`)
        return `Koala win (${koalaAvg}> ${dolphinAvg})`
    }
    else {
        console.log(`No team wins... ${koalaAvg} ${dolphinAvg}`)
        return `It's a draw`
    }
}
checkWinner(dolphinScore, koalaScore)
checkWinner(555, 222)
 */
/*

//ARRAYS
const friends = []
friends.push(`Sandy`, `Rajani`, `Sarah`)
console.log(friends)

friends.unshift(`Charan`) //add at the beginning of an Array
console.log(friends)

friends.shift(``) //remove first element of an array
console.log(friends)

console.log(friends.indexOf(`Sandy`)) //Gives index of an element

console.log(friends.includes(`Sandy`)) //Gives boolean if a element exists in array or not
console.log(friends.includes(`J`))
 */

/* const bills = [125, 550, 44]
const tipCalc = function (billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20
}
const tip = [tipCalc(bills[0]),
             tipCalc(bills[1]),
             tipCalc(bills[2])
            ]
console.log(tip)
const totals = [bills[0] + tip[0],
                bills[1] + tip[1],
                bills[2] + tip[2]
               ]
console.log(totals) */
/*
//Objects are similar to Array and written using '{}' - Order of the value doesn't matter for objects
const sandy = {
    firstName: `Sandy`,
    lastName: `Nani`,
    age: 2021 - 1993,
    job: `QA`,
    friends: [`S`, `R`, `Q`]
}
console.log(sandy)

//Getting property from object
console.log(sandy.firstName)

console.log(sandy['firstName'])

const nameKey = 'Name'

console.log(sandy['first' + nameKey])

console.log(sandy['last' + nameKey])

const interestedIn = prompt('What do you want to know about Sandy? Choose between firstName, lastName, age, job and friends')
console.log(interestedIn)
console.log(sandy[interestedIn])//Gives the value of the field when using '[]'
//To handle undefined values
if (sandy[interestedIn]) {
    console.log(sandy[interestedIn])
}
else {
    console.log(`Wrong request`)
}

//How to add new properties to objects
sandy.location = `USA`
sandy.state = `MN`
console.log(sandy.location, sandy.state)

 */

/* const sandy = {
    firstName: `Sandy`,
    lastName: `Nani`,
    age: 2021 - 1993,
    job: `QA`,
    friends: [`S`, `R`, `Q`]
}
console.log(sandy)

//const bestFriend = prompt("Whose is best friend of Sandy? ")
console.log(`${sandy.firstName} has ${sandy.friends.length} friends and his best friend is ${sandy.friends[0]}`) */
/*
const sandy = {
    firstName: `Sandy`,
    lastName: `Nani`,
    birthYear: 1993,
    job: `QA`,
    friends: [`S`, `R`, `Q`],
    hasDriversLicense: true,
    //adding function inside object - We need to assign to a property(could be any varible)
    calcAge: function (birthYear) {
        return 2021 - birthYear
    }
}

console.log(sandy.calcAge(1993)) //calling with '.'
console.log(sandy[`calcAge`](sandy.birthYear)) //caling with bracket but should be string so using '' for calcAge */

/* //Introduction to 'this' keyword
const sandy = {
    firstName: `Sandy`,
    lastName: `Nani`,
    birthYear: 1993,
    job: `QA`,
    friends: [`S`, `R`, `Q`],
    hasDriversLicense: true,
    //we can use 'this' keyword inside object as birthyear is already defined
    calcAge: function () {
        console.log(this)
        this.age = 2021 - this.birthYear //'.' create new object so we used in directly and created age
        return this.age
    },
    getSummary: function () {
        return ` ${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's License`
    }
}

console.log(sandy.calcAge())
console.log(sandy.age)
console.log(sandy.age)
console.log(sandy.getSummary()) */

/*
//CHALLENGE 3
const mark = {
    fullName: `Sandy Nani`,
    mass: 78,
    height: 1.69,
    callBMI: function () {
        this.bmi = Math.floor(this.mass / this.height ** 2)
        return this.bmi
    },
}
const john = {
    fullName: `Sa Ra`,
    mass: 92,
    height: 1.95,
    callBMI: function () {
        this.bmi = Math.floor(this.mass / this.height ** 2)
        return this.bmi
    },
}
mark.callBMI()
john.callBMI()
console.log(mark.bmi, john.bmi)
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI ${john.bmi}`)
}
else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}`)
}
else {
    console.log(`Both BMI are same`)
}
 */

/* //LOOPS
//for
for (let rep = 0; rep < 11; rep++) {
    console.log(`Lifting weights repitition ${rep} times 🏋🏽‍♀️`)
}*/

//Loop through Array
/* const sandy = [
    `Sandy`,
    `Nani`,
    2021 - 1993,
    `QA`,
    [`S`, `R`, `Q`],
    true
] */
/* const types = []
for (let i = 0; i < sandy.length; i++) {
    console.log(sandy[i], typeof sandy[i])
    types[i] = typeof sandy[i]
    console.log(types)
}

const years = [1991, 1997, 2000, 2005, 2010, 2015, 2020]
const ages = []

for (let i = 0; i < years.length; i++) {
    ages.push(2050 - years[i]);
}
console.log(ages)

//continue - to continue the loop
//break - to break out from loop
console.log(`-------only strings-----`)
for (let i = 0; i < sandy.length; i++) {
    if (typeof sandy[i] !== 'string') {
        continue
    }
    console.log(sandy[i], typeof sandy[i])
}
console.log(`-------only numbers-----`)
for (let i = 0; i < sandy.length; i++) {
    if (typeof sandy[i] === 'number') {
        break
    }
    console.log(sandy[i], typeof sandy[i])
} */

//Looping forward and Backward
/* for (let i = sandy.length - 1; i >= 0; i--) {
    console.log(i, sandy[i])
}


//loop inside a loop
for (let exercise = 1; exercise <= 5; exercise++) {
    console.log(`-------Starting exercise ${exercise}--------`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repitition ${rep} 🏋🏽‍♀️`)
    }
}
 */
//while loop - while needs only condition and it needs to be true and will keep increasing
/* let rep = 1
while (rep <= 5) {
    console.log(`While loop--Lifting weight repitition ${rep} 🏋🏽‍♀️`)
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice != 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
} */


//Challenge #4 
//Calculator

/* const bills = [22, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []
const tipCalc = function (billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20
}
for (let i = 0; i <= bills.length - 1; i++) {
    const tip = tipCalc(bills[i])
    tips.push(tip)
    totals.push(tip + bills[i])
}
console.log(totals, bills, tips)

const calcAvge = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
    return sum / arr.length
}
console.log(Math.trunc(calcAvge(totals))) */

