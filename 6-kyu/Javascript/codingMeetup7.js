// 6kyu
// Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
// https://www.codewars.com/kata/582887f7d04efdaae3000090/javascript

/**
DESCRIPTION:
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
Your task is to return a sequence which includes the developer who is the oldest. 
In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

For example, given the following input array:

var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

your function should return the following array:
[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]

Notes:
The input array will always be valid and formatted as in the example above and will never be empty.
*/

// 1. Find oldest dev in all devs
// 2. Again, compare each dev to that age. If dev >= oldest, push object to []
// 3. Return [] of 1 oldest dev or [] multiple old devs

// Tags: filter(), reduce()

/**
 * Finds most senior developers in the array of objects
 * 
 * @param {array} list is array of developer objects
 * 
 * @returns array of developers with max age
 */
function findSenior(list) {
  // Keep updating maxAge using reduce() callback by comparing each devAge to max number which is initially set to 0
  let oldestAge = list.reduce((maxAge, currentDev) => (currentDev.age >= maxAge ? currentDev.age : maxAge), 0);
  // Create resul array by using filter() and a condition
  const result = list.filter(dev => dev.age >= oldestAge);
  return result;
}

function findSenior(list) {
  let oldest = 0;
  list.forEach((dev) => {
    if (dev.age >= oldest) {
      oldest = dev.age;
    }
  });
  let mostSeniorDev = [];
  list.forEach((dev) => {
    if (dev.age >= oldest) {
      mostSeniorDev.push(dev);
    }
  });
  return mostSeniorDev;
}
