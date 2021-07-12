'use strict';
/* function calcAge(birthYear) {
  const age = 2021 - birthYear;
  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you are a millenial ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  console.log(firstName);
  return age;
}
const firstName = `Sandy`;
console.log(calcAge(1993)); */

//this KEYWORD

const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this); // Here it is undefined as it uses parent if available
};
calcAge(1993);

const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  console.log(this); // It uses from window so uses from global scope - Doesn't belong to this funtion
};
calcAgeArrow(1997);

const sandy = {
  year: 1993,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year); // Will take the value from the calling variable
  },
};

//Object.assign is used to merge 2 Objects - it works on only 1st level
