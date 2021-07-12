'use strict';
/* //Array Destructuring
//old method
const arr = [2, 3, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//New method
const [x, y, z] = arr;
console.log(x, y, z); */
// Data needed for a later exercise

/* 
const [first, , second] = restaurant.categories; // By leaving gap we left the 2nd index from the array
console.log(first, second); //It prints 1st and 3rd

let [main, secondary] = restaurant.mainMenu;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary); //to flip elements by destructing arrays

console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Using array manipulation in nested array
const nested = [2, 3, 4, [5, 6]];
const [i, , , [j, k]] = nested;
console.log(i, j, k);

//Default values for array by destructuring
const [p, q, r] = [8, 9];
console.log(p, q, r); //will get undefined
const [t = 1, u = 1, w = 1] = [9];
console.log(t, u, w);
 */
/* const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (startedIndex, mainIndex) {
    return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is the pasts with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'chicken');
//using Rest to pack an array
const arr = [1, 2, ...[3, 4]];
console.log(arr, 'this is using Spead');
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others, 'This is using Rest');
//Rest element always MUST BE LAST ELEMENT and ONLY USED 1 TIme only
const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);

//SPREADABLE used on right side of '=' the assignment operator

/* const { name, openingHours, categories } = restaurant; //Assigning object set values to variables directly but we use same name
console.log(name, openingHours, categories);

//To call it with other name we say Object tag and ":" and write what name we need
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, tags, hours);

//Default values
const { menu = [], starterMenu = [] } = restaurant; // Here we are setting default values so menu will be empty but Starter menuw ill pick up from objects
console.log(menu, starterMenu);

//mutating variables in objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); //we should wrap in a bracket to manipulate values
console.log(a, b); //Here 111 became 23 and 999 became 7

//Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//Spread operator - unpacks all elements of an array at once
const arr = [1, 2, 3];
const newArr = [4, 5, ...arr]; //"...'array name'"
console.log(newArr);
console.log(...newArr); //This prints array elements individually

const newMenu = [...restaurant.mainMenu, 'soup', 'cheese']; //Main obj is not manipulated
console.log(newMenu);

//We can merge arrays or create shallow arrays
const mainMenuCopy = [...restaurant.mainMenu]; //shallow copy of main menu

const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu]; //Joining arrays
console.log(...menu2);

//Iterables : arrays, strings, maps, sets. NOT OBJECTS --> Spreaad can be used on all iterables and latest with objects as well
const ingrediants = [
  prompt(`Let's make pasta!? Ingredient 1`),
  prompt(`Ingredient 2`),
  prompt(`Ingredient 3`),
];
console.log(ingrediants);
restaurant.orderPasta(...ingrediants);

//using speadable to add new elements to objects and making shallow copy
const newRestaurant = { foundedIn: 1990, ...restaurant, founder: 'Sandy' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Sandy Shade';
console.log(restaurantCopy);
 */ /*
console.log('============OR============');
//SHORT CIRCUTING with || operator- Can be used instead of IfElse
// If 1st value is truthy value program returns 1st value when using '||'
console.log(3 || 'Jonas'); //Value would return 3
console.log('' || 'Jonas'); //Value would return Jonas as 1st object is empty string which is false
console.log(true || 0); // true will be returned
console.log(undefined || null); //null will be returned as 2nd value will be automatically returned if 1st is falsify Meaning it is short circuting
console.log(undefined || 0 || '' || 'Hello' || 23 || null); //this returns 'HELLO' as it will short circuit at 'HELLO'
//Basically program will keep looping until 1st truth or the last element and print accordinly

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //Here we get 10 as numGuests is undefined so we are giving 10 value as basic

const guests2 = restaurant.numGuests || 20; //This is short circuting where program checks for numGuests it is undfined so it goes to next option and it is a truthify vlue so it assigns it to Guests2 variable
console.log(guests2);
console.log('============AND============');

//SHORT circuting && operator - Basically works in opposit of || operator
//it shortcircuits if 1st falsy value and prints 1st and would not check 2nd operator also
console.log(0 && 'Jonas'); //Prints 0 - As && operator will print first falsy value
console.log(7 && 'Jonas'); //prints 'Jonas' as 1st is truthy value
//Basically && prints 1st falsy value or the last value in a statement
console.log('Jones' && 23 && 'High' && null && 0 && 'Again'); //here null is printed as it is first falsy value in the chain
const pizza1 =
  restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); //Here 1st is a truthy so it is executing the last value where we are calling a legit function and it works can be used to execute first condition wth if else

//NUllish coalescing operator - New to JS with ES 6
//It helps halding null and undefined values by shortcircuting
console.log('-------------NUllish coalescing operator-------------');
restaurant.numGuests = 0;
const guestsWrong = restaurant.numGuests || 10; //here it generally gives 10 but it can be 0 guests also so we use nullish
console.log(guestsWrong, 'THis is not with nullish');
const guestsCorrect = restaurant.numGuests ?? 10; //Here it takes the 0 which is undefined but sttill prints it
console.log(guestsCorrect, 'THis is with nullish');


 */

//coding challenge 1

//Football challenge
/* Your tasks:
1. Create one player array for each team(variables'players1'and 'players2')
2. Thefirstplayerinanyplayerarrayisthegoalkeeperandtheothersarefield players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Createanarray'allPlayers'containingallplayersofbothteams(22 players)
4. Duringthegame,BayernMunich(team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Basedonthegame.oddsobject,createonevariableforeachodd(called 'team1', 'draw' and 'team2')
6. Writeafunction('printGoals')thatreceivesanarbitrarynumberofplayer names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. Theteamwiththeloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
 */ /*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

// const goalkeeper = [players1[0], players2[0]];
// console.log(goalkeeper); this is my version
// const fieldPlayers = [[...players1], [...players2]];
// console.log(fieldPlayers);
const [goalkeeper1, ...fieldPlayers1] = players1;
console.log(goalkeeper1, fieldPlayers1);

const [goalkeeper2, ...fieldPlayers2] = players2;
console.log(goalkeeper2, fieldPlayers2);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// const team1 = game.odds.team1; I tried like this we can use nested like below
// const draw = game.odds.x;
// const team2 = game.odds.team2;

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// function printGoals() { I tried like this but we have to pass an argument to we can keep updating goal scoreres
//   game.scored = [...game.scored, 'Davies', 'Muller', 'Lewandowski', 'Kimmich'];
//   console.log(...game.scored, game.score);
// }
// printGoals();
const printGoals = function (...players) {
  for (const item of players) //here we used for of //read below after this challenge
    console.log(`${item} scored ${players.length} goals`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// const gameWin = team1 || draw || team2; I tired like this
// console.log(gameWin);
team1 < team2 && console.log(`${game.team1} is more likely to win`);
team1 < team2 || console.log(`${game.team2} is more likely to win`);
console.log(
  `${
    (team1 < team2 && game.team1) || game.team2
  } is more likely to win - Written in single game`
);
*/
const days = ['m', 't', 'w', 't', 'f', 's', 'sun'];
const openingHours = {
  wed: {
    open: 12,
    close: 22,
  },
  thu: {
    open: 11,
    close: 23,
  },
  fri: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
  order: function (startedIndex, mainIndex) {
    return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is the pasts with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//For-OF LOOP - Syntax
//for(variable declaration of array) {}
//We can print each element of an array
for (const item of menu) console.log(item);
//Hard to get current Index but we can try like below
for (const [item, element] of menu.entries()) {
  //here we broke the menu in to 2 array by restructuring and then called
  console.log(`${item + 1}: ${element}`); //here to print a fancier menu with number before it
}
/*
//ENHANCED OBJ literals
//1. we can call outside objects inside other objects just by mentioning the object name - Example below
const sandy = {
  firstName: 'Sandy',
  lastName: 'Nani',
  birthYear: 1993,
};
const rajani = {
  firstName: 'rajani',
  lastName: 'rosy',
  birthYear: 1992,
  sandy, //Here we are calling sandy object directly with out needing any other keyword
};
//2. We don't need to create a property to write funtion -> we can remove funciton key word - Example below
const sandy2 = {
  firstName: 'Sandy',
  lastName: 'Nani',
  birthYear: 1993,
  order: function () {
    console.log('Here we are using funtion keyword');
  },
  order2(ing1, ing2) {
    //here we are not using function keyword and not even using ":" also
    console.log(
      'We can directly write parameters and using funciton with out using the funciton keyword'
    );
  },
};
//3. We can now compute property names - Example below
const s3 = ['s', 't', 'u'];
const sandy3 = {
  //here we are going to change the firstname property name with other functions and it stillworks
  [s3[0]]: 'Sandy',
  [s3[1]]: 'Nani',
  [`${2021 - 1993}`]: 28, //We literally wrote a calling for the property name
};*/
/*

//Optional chaining - If certain property doesn't exist we get undefined immediately
//We use '?' symbol followed by check
//It always checks for statement before ? if they are true or not
console.log(restaurant.openingHours.mon?.open); //Here we get undefined as mon doesn't exist
console.log(restaurant.openingHours?.open);
//Example
for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'Closed'; //We are checking if the day exists in obj by using '?' if not we can printing closed
  console.log(`On ${day}, we open at ${open}`);
}

//We can use to check if Methods by optional chaining
console.log(restaurant.order?.(0, 1) ?? 'Method doesnot exist'); //Here order exist so it pulls the elements
console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method does not exist'); //Here orderRissotto doesn not exist so it pulls the elements

//We can check Arrays also using optional chaining - LIke if array is empty or not
const sandy = [
  {
    name: 'Sandy',
    palce: 'mn',
    birth: 1993,
    something: 'Something',
    nothing: 'Nothign',
  },
];
const raj = [];

console.log(sandy[0]?.name ?? 'User array empty'); //It always checks for statement before ?
console.log(raj[6]?.name ?? 'User array empty');
*/
/*
//Looping over objects, keys
//It is indirectly done by looping array
//Property names we use object.keys
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `we are open on ${properties.length} days:`;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
  console.log(day);
}
console.log(openStr, 'This is using key');

//If we need object property values  we use object.values
const values = Object.values(openingHours);
console.log(values, 'This is using values');

//If we need both keys and values we use entries
//[key, value] but here value is itself a array so we declared as below
const entries = Object.entries(openingHours);
for (const [key, { open, close }] of entries) {
  console.log(
    `On ${key} we open at ${open} and close at ${close}`,
    '---This is using entries'
  );
}*/
/*
//Challenge 2
const scorers = { Gnarby: 1, Hummels: 1, Lewandowski: 2 };
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  scorers,
};
//1.

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1} is scored by ${player}`);
}

//2.
let avg = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  avg += odd;
}
avg /= odds.length;
console.log(`Average is ${Math.trunc(avg)}`);
//console.log(Math.floor(avg / odds.length));

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(team, odd);
  const teamString = team === 'x' ? 'draw' : `Victory for ${game[team]}`;
  console.log(`Odds of ${teamString} is ${odd}`);
}*/

/*
//SETS - A colleciton of unique values and cannot ever have duplicates
//There is no index so we cannot pull any values out of a set
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Sauce', 'Pasta']);
console.log(orderSet); //here all duplicates are removed and printed only unique values
//Size of a set
console.log(orderSet.size);
console.log(orderSet.has('Pizza')); //True
console.log(orderSet.has('bread')); //False
orderSet.add('Garlic bread');
console.log(orderSet);
orderSet.delete('Sauce');
console.log(orderSet);
//orderSet.clear();

//looping sets is used as below
for (const order of orderSet) {
  console.log(order);
}
//Example
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// const newSet = new Set(staff);//Here we are clearing any duplicates
// console.log(newSet);
// const uniqueSet = [...newSet];//Here we are changing it back to an array
// console.log(uniqueSet);

//We can do it in single line
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);
//Just to get unique positions of an array
console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);
*/
/*
//MAPS - Data structure to map values to keys, 1st position is key 2nd is value
const rest = new Map(); //Better way is create an empty map and later use it
rest.set('name', 'Classic Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'London, England');
rest.set(3, 'Hyd, India');
console.log(rest);

//set enhirits updated map automatically
rest
  .set('categories', ['Italian', 'English', 'American', 'Portugese', 'Indian'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

//We use .get to retireve the value from the map
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 12;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);

//We can use array or obj as map keys
rest.set([1, 2, 3, 4, 5], 'test');
console.log(rest.get('test')); //doesn't work as the key is direct array for it to work we haev to create array outisde and then call it
const arr = [4, 5, 6, 7, 8];
rest.set(arr, 'test2');
console.log(rest.get(arr)); //this will give value test2 as array is declared outside and then added to set
*/
/*
//MAPS ITERATION
//Instead of set
//1st position is key 2nd is value
//We will have arrays inside arrays
const question = new Map([
  ['question', 'what is the best programming language'],
  [1, 'C'],
  [2, 'JAVA'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'You are right🎊'],
  [false, 'Try again! 😭'],
]);
console.log(question);

//Converting objects to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Looping for Map and print
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = Number(prompt('Your answer'));
console.log(answer);

const correctAns = answer === 3 ? question.get(true) : question.get(false);
console.log(correctAns, 'My method');

console.log(
  question.get(question.get('correct') === answer),
  'Tutorial method'
);

//Converting Map to array
const newArr2 = [...question];
console.log(newArr2);
console.log(question.keys());
console.log(question.values());
console.log(question.entries());
*/

//When to use Map vs Obj vs Array vs Sets
//Simple list - Array or Set
//Key Value pairs - Map or Object
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [(72, '🔁 Substitution')],
  [(76, '⚽ GOAL')],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4.
for (const [min, event] of gameEvents) {
  // console.log(`An event happened, on average, every 9 mins ${value}: ${key}`);
  min <= 45 === true
    ? console.log(`[First Half] ${min}: ${event}`)
    : console.log(`[Second Half] ${min}: ${event}`);
  // if (key < 45) {
  //   console.log(`[First Half] ${key}: ${value}`);
  // } else {
  //   console.log(`[Second Half] ${key}: ${value}`);
  // }
}
*/
//-------------------------------------
//Working with Strings

const airLine = 'TAP Air India';
const plane = 'A330';

console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('a'));
console.log(airLine.indexOf('India'));

//Slice method -
//First get index for first index we need the word to be sliced similar to substring
console.log(airLine.slice(4)); //begin parameter
console.log(airLine.slice(4, 7)); //It prints from 4 till index 7-1 =6

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1)); //+1 to remove space before

console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  s === 'B' || s === 'E'
    ? console.log(`You got ${seat} - Middle seat`)
    : console.log(`You got ${seat} - Not middle seat `);
  // if (s === 'B' || s === 'E') {
  //   console.log(`You got ${seat} - Middle seat`);
  // } else {
  //   console.log(`You got ${seat} - Not middle seat `);
  // }
};
checkMiddleSeat('12B');
checkMiddleSeat('2A');
checkMiddleSeat('2C');
checkMiddleSeat('12E');

//Changing case of String
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

//to correct passanger name this works but not for fullname
const passNameCorrection = function (name) {
  const lowerFirst = name.toLowerCase();
  const correction = lowerFirst[0].toUpperCase() + lowerFirst.slice(1);
  console.log(correction);
  // return correction;
};
passNameCorrection('sAnDeEp SatEllY');

//check user input email
//trim keyword is used to remove any white spaces
//trimStart is used to clear spaces before string
//trimAfter is used to clear spaces after String
const trimingString = function (email) {
  const correctEmail = email.toLowerCase().trim();
  console.log(correctEmail);
};
trimingString('  HeloOoOo@yahooOOo.CoM  \n');

//replacing - replaces only 1st occurance
//we can use 'replaceAll' for all accourances
//Or use expressions we cover the word with '/word/'followed by g example below
//converting UK currency to US
const currencyConversion = function (currency) {
  const correctCurrency = currency.replaceAll('£', '$').replaceAll(',', '.');
  console.log(correctCurrency);
};
currencyConversion('3,00,000,000 £');

const announcement = `Boarding door is closing, boarding door is closing`;
console.log(announcement.replace(/door/g, 'gate'));

//Booleans - includes, startWith, endsWith

const plane1 = 'A320neo';
console.log(plane1.includes('neo'));
console.log(plane1.startsWith('neo'));
console.log(plane1.endsWith('neo'));

//Split keyword - we use split followed by the divider
//We can fill the result of split in to an array
//Join keyword - used to join followed by what we need in between
console.log('a+string+is+written+like+this'.split('+'));

const [firstName, lastName] = 'Sandeep Satelly'.split(' ');
const newName = ['Mr.', firstName, lastName].join(' '); //Here in join if we dont give space the new string would be joined without any space like Mr.SandeepSatelly
console.log(newName);

//Name correction - Fullname
const nameCorrection = function (fullName) {
  const names = fullName.toLowerCase().split(' ');
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    //we can write like this as well or as above using replce or slice
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper);
  console.log(namesUpper.join(' '));
};

nameCorrection('sAnDEep SatElly nAme Changing aS eXpectEd');

//Padding a string - adding number of characters to String until certain length of string is achieved
//padStart adds at the beginning of string
//padEnd adds at the end of string
//We can specify what to be filled in the string
const msg = 'Goto gate 23!';
console.log(msg.padStart(25, '+'));
console.log(msg.padEnd(25, '-'));
console.log('msg'.padEnd(25, '-'));
console.log(msg.padEnd(20, '-').padStart(30, '+'));

//Used to mask numbers or anything in a string
const maskCCD = function (card) {
  const cardNum = card.toString();
  const last = cardNum.slice(-4);
  console.log(last.padStart(cardNum.length, '*'));
  return last.padStart(cardNum.length, '*');
};
maskCCD(1234567890);
maskCCD(45678901234564);
maskCCD('45678901234564-Credit');

//Repeat - we can repeat same string multiple times

const msg2 = 'Bad weather... All departues delayed\n';
console.log(msg2.repeat(5));

const planesInLine = function (plane) {
  console.log(`There are ${plane} number of ${'🛩'.repeat(plane)}`);
};
planesInLine(5);
planesInLine(51);
planesInLine(45);

//Coding challenge 4
/* 
const camelCorrection = function (givenName) {
  // const lowerConv = givenName.toLowerCase();
  // const underScoreIndex = lowerConv.indexOf('_');
  // const stringAfter = lowerConv[underScoreIndex + 1].toString();
  // const upperCase = lowerConv.replace(
  //   lowerConv[underScoreIndex + 1],
  //   stringAfter.toUpperCase()
  // );
  // const replaceScore = upperCase.replace('_', '').trim();
  // console.log(replaceScore);
  if (givenName.includes('_')) {
    const lowerConv = givenName.toLowerCase();
    const underScoreIndex = lowerConv.indexOf('_');
    const firstHalf = lowerConv.slice(0, underScoreIndex);
    const secondHalf = lowerConv.slice(underScoreIndex + 1);
    const secHalf = secondHalf[0].toUpperCase() + secondHalf.slice(1);
    const replacedString = (firstHalf + secHalf).trim();
    console.log(
      `The word ${givenName} is successfully replaced with ${replacedString} ✅`
    );
  } else {
    console.log(`The given string ${givenName} doesn't have an '_' underScore`);
  }
};
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
camelCorrection('Under_Score');
camelCorrection(' first_name');
camelCorrection('Some_Variable');
camelCorrection('  calculate_AGE');
camelCorrection('delayed_departure');
 */
// const button = document.querySelector('button');
// button.onclick = function () {
//   camelCorrection(textArea.value.trim());
// };
/* 
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure 
*/
//or
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const textArea = document.querySelector('textarea').value;
  const newRows = textArea.split('\n');
  console.log(newRows);
  for (const [i, row] of newRows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    console.log(first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/
//FLights
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();
const correctString = function () {
  const flight = flights.replaceAll('+', '\n').replaceAll('_', ' ').split('\n');
  for (const row of flight) {
    const [type, from, to, time] = row.split(';');
    const output1 = `${
      type.startsWith(' Delayed') ? '🔴' : ''
    }${type} from ${getCode(from)} to ${getCode(to)} (${time.replaceAll(
      ':',
      'h'
    )})`.padStart(50);
    console.log(output1);
  }
};
correctString(flights);
