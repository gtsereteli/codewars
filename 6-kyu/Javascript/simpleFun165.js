/**
 Simple Fun #165: Withdraw
 https://www.codewars.com/kata/58afce23b0e8046a960000eb

DESCRIPTION:
An ATM ran out of 10 dollar bills and only has 100, 50 and 20 dollar bills.

Given an amount between 40 and 10000 dollars (inclusive) and assuming that the ATM wants to use as few bills as possible, 
determinate the minimal number of 100, 50 and 20 dollar bills the ATM needs to dispense (in that order).

Example
For n = 250, the result should be [2, 1, 0].
For n = 260, the result should be [2, 0, 3].
For n = 370, the result should be [3, 1, 1].

Input/Output
[input] integer n Amount of money to withdraw. Assume that n is always exchangeable with [100, 50, 20] bills.
[output] integer array An array of number of 100, 50 and 20 dollar bills needed to complete the withdraw (in that order).
 */

function withdraw(n) {
  let franklin = 0;
  let jackson = 0;
  let grant = 0;
  const result = [];

  while (n >= 100 && n !== 130 && n !== 110) {
    n -= 100;
    franklin++;
  }

  while (n >= 50 && n % 20 !== 0) {
    n -= 50;
    grant++;
  }

  while (n <= 80 && n > 0) {
    n -= 20;
    jackson++;
  }

  result.push(franklin, grant, jackson);
  return result;
}
