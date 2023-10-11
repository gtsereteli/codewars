// 7kyu
// Coding Meetup #14 - Higher-Order Functions Series - Order the food
// https://www.codewars.com/kata/583952fbc23341c7180002fd


// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
//     meal: 'vegetarian' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
//     meal: 'standard' },
//   { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
//     meal: 'vegan' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
//     meal: 'vegetarian' },
// ];

// your function should return the following object (the order of properties does not matter):

// { vegetarian: 2, standard: 1, vegan: 1 }

// Notes:
// The order of the meals count in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.
// there are 5 possible meal options and the strings representing the selected meal option 
// will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.

// Tags: forEach(), hasOwnProperty()

/**
 * Counts each type of meal in the input array
 * 
 * @param {list} list is input array of objects
 * 
 * @returns back object with key values pairs of meal and count
 */
function orderFood(list) {
  const order = {};
  list.forEach((dev) => {
    if (!order.hasOwnProperty(dev.meal)) {
      order[dev.meal] = 1;
    } else {
      order[dev.meal] = order[dev.meal] + 1;
    }
  });
  return order
}
