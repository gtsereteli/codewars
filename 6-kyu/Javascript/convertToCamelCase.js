/**
Convert string to camel case
https://www.codewars.com/kata/517abf86da9663f1d2000003

DESCRIPTION:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only 
if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples:
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
  let charArr;
  let result = '';
  if (str.includes('_')) {
    charArr = str.split('_');
  } else charArr = str.split('-');

  for (let i = 0; i < charArr.length; i++) {
    if (i === 0) {
      result += charArr[i].slice(0, 1) + charArr[i].slice(1).toLowerCase();
    } else {
      result += charArr[i].slice(0, 1).toUpperCase() + charArr[i].slice(1).toLowerCase();
    }
  }
  return result;
}
