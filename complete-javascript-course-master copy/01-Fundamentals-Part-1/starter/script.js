/* let js = 'amazing';
console.log(40 + 8 - 23);

const markHeight = 1.69
const markMass = 78
const johnHeight = 1.95
const johnMass = 92

const markBmi = Math.floor(markMass / markHeight ** 2)
const johnBmi = Math.floor(johnMass / (johnHeight * johnHeight))

const markHigherBmi = markBmi > johnBmi

console.log(markBmi, johnBmi, markHigherBmi)
if (markBmi > johnBmi) {
    console.log(`Mark's BMI is ${markBmi} which is higher than John's BMI ${johnBmi}`)
} else {
    console.log(`John's BMI is ${johnBmi} which is higher than Mark's BMI ${markBmi}`)
} */
/* const firstName = "Sandy"
const job = "QA"
const birthYear = 1993
const year = 2021

const completeSentence = `I'm ${firstName}, a ${year - birthYear} years old ${job}`
console.log(completeSentence) */

/* //For an If statement we don't need to mention true or false for a single line known as Truthify or falsify values
const age = 19
const isOldEnough = age >= 18
if (isOldEnough) {
    console.log(`Sarah is old enough to drive a car`)
} */
/*
//To change the variable we have to use 'Number' function and 'String'
const inputYear = '1993'
console.log(Number(inputYear), inputYear)
console.log(inputYear + 18);
console.log('23' - '10' - 3) // Subtraction converts to int
console.log('23' + '10' + 3) //Only Addition converst to String
 */

/*
const numberPrompt = Number(prompt(`What's your favorite number???`)) //prompt keyword actually gives a alert box on chrome TAB
console.log(typeof numberPrompt, numberPrompt)
if (numberPrompt === 5) {
    console.log(`Cool! 5 is a noice number`)
}

 */
/*
const age = 15
const hasDriverLicense = false
const hasGoodVision = true
console.log(hasDriverLicense && hasGoodVision)
console.log(hasDriverLicense || hasGoodVision)
console.log(!hasDriverLicense)

const shouldDrive = hasDriverLicense && hasGoodVision
/*
if (shouldDrive) {
    console.log(`Sarah is able to drive`)
} else {
    console.log(`Dad has to drive Sarah`)
}

const isTired = false

console.log(hasDriverLicense && hasGoodVision && isTired)


if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive`)
} else {
    console.log(`Dad has to drive Sarah`)
} */

/*//Using If else
//Score set 1
const dolphinScore1 = 96
const dolphinScore2 = 112
const dolphinScore3 = 89
const koalaScore1 = 88
const koalaScore2 = 91
const koalaScore3 = 110

 //Score set 2 for Min needed
const dolphinScore1 = 97
const dolphinScore2 = 112
const dolphinScore3 = 101
const koalaScore1 = 109
const koalaScore2 = 95
const koalaScore3 = 106

const dolphinAvg = Math.floor((dolphinScore1 + dolphinScore2 + dolphinScore3) / 3)
const koalaAvg = Math.floor((koalaScore1 + koalaScore2 + koalaScore3) / 3)

if (dolphinAvg && koalaAvg >= 100) {
    if (dolphinAvg > koalaAvg) {
        console.log(`Dolphin's with ${dolphinAvg} win 🏆 over Koala's ${koalaAvg} `)
    } else if (koalaAvg > dolphinAvg) {
        console.log(`Koala's with ${koalaAvg} win 🏆  over Dolphin's ${dolphinAvg}`)
    } else {
        console.log(`It's a draw between Dolphin's and Koala's with ${koalaAvg} = ${dolphinAvg}`)
    }
} else {
    console.log(`The minimum average of 100 is not met by both Dolphin's - ${dolphinAvg} and Koala's - ${koalaAvg}`)
}*/
/*
//Switch Statement
const day = `Tuesday`
switch (day) {
    case `Monday`:
        console.log(`Today's ${day}
          Finish Switch Statements`)
        break;
    case `Tuesday`:
        console.log(`Today's ${day}
          Not correct day`)
        break;
    case `Wednesday`:
        console.log(`Today's ${day}
          Not correct day`)
        break;
    case `Thursday`:
        console.log(`Today's ${day}
          Not correct day`)
        break;
    case `Friday`:
        console.log(`Today's ${day}
          Not correct day`)
        break;
    case `Saturday`:
        console.log(`Today's ${day}
          Not correct day`)
        break;
    case `Sunday`:
        console.log(`Today's ${day}
          Not correct day`)
        break;
} */
/*
//Conditional operator
const age = 28
age >= 18                                           // this is the condition which we need to check
    ? console.log(` I would like a glass of wine 🍷`) : // this statement acts as if
    console.log(`I'd like a glass of milk 🥛`)               // this statement acts as else when used with '?'

const drinkAge = age >= 18 ? `Wine 🍷` : `Milk 🥛` // This is generally how it's used -
console.log(`I'd like to drink ${drinkAge}`)      //Declaration is saved in variable with the conditions and then run
*/
/*
//TIP Calculator

const billValue = 310

const tip = billValue <= 300 && billValue >= 50 ?
    billValue * 0.15 : billValue * 0.20

console.log(`The bill is ${billValue}, tip is ${tip} and the total is ${billValue + tip}`)

//`The bill is ${billValue}, tip is ${billValue * 0.15} and the total is ${billValue + billValue}` : `The bill is ${billValue}, tip is ${billValue * 0.20} and the total is ${billValue + billValue}`

*/