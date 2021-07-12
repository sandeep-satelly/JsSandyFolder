'use strict';
/* // // Remember, we're gonna use strict mode in all scripts now!
//

// //configure VS CODE
// //Using prettier
// console.log('something');
const temparature = [3, 7, 4, 1, 8, 10, 99, 'something', 21, 55, 23];
//Finding max, min value in an array and ignore errors
const calcTempAltitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
calcTempAltitude(temparature);
console.log(calcTempAltitude(temparature));

//How to merge 2 arrays
// array1 =[]
// array2 =[]
// array3 = array1.concat(array2)

 */

/* //DEbugging using console.log
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degree Celsius')),
     //value: prompt('Degree Celsius'), => to fix this we are going to wrap prompt in number so it will take as number
  };
  console.log(measurement.value);
  console.warn(measurement.value); // Shows Yellow warn icon in console while execution
  console.error(measurement.value); // shows red error icon in console while execution
  console.table(measurement); //Shows all values of an object in table format
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin()); // Issue is value is being taken as String */

//Debugging using debugger in Chrome
//Open inspect -> go to sources -> Open the current file (Script.js)
//-> Set breakpoints by clicking on left bar near each line
/* const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degree Celsius')), //=> to fix this we are going to wrap prompt in number so it will take as number
  };
  debugger; //this keyword start debugger in browser
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin()); // Issue is value is being taken as String */

//CHallenge #1

const temparature = [17, 21, 23];
const temparature2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let newArr = '';
  for (let i = 0; i < arr.length; i++) {
    newArr += `... ${arr[i]}C in ${i + 1} days `;
  }
  console.log(newArr + '...');
};
printForecast(temparature);
printForecast(temparature2);
