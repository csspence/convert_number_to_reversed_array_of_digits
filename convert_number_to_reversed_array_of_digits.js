/*
Convert number to reversed array of digits
Given a random number:

C#: long;
C++: unsigned long;
You have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/

const digitize = (n) => {
  const str = n.toString();
  const arr = [];
  for(let i = str.length - 1; i > -1; i--) {
    arr.push(parseInt(str[i]));
  }
  
  return arr;
}