//Understanding reduce function in Javascript

var numbers = [1, 2, 3, 4];
function getSum(total, num) {
  return total + Math.round(num);
}

const final_result = numbers.reduce(getSum, 0);
console.log('final_result ==> ' , final_result); // expected output: 10

/*
- The reduce() method reduces the array to a single value.
- The reduce() method executes a provided function for each value of the array (from left-to-right).
- The return value of the function is stored in an accumulator (result/total).
*/

//using arrow function
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const result = array1.reduce(reducer); 
console.log('result is : ==> ' , result); // expected output: 10

const result2 = array1.reduce(reducer,5);
console.log('result is : ==> ' , result2); // expected output: 15
