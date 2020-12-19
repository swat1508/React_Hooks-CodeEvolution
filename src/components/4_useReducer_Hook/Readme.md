useReducer Hooks
================

useReducer hook is used for State Management
Its an alternative to useState
useState is build using useReducer
accepts 2 params - reducer function and initial state
Note: the reducer fuction also accepts 2 param - current state and action

So
useReducer(reducer,initialState)
newState = reducer(currentState,action)
useReducer returns a pair of values - newState & dispatch

useState => state
useEffect => side effect
useContext => Context Api
useReducer => reducer

Lets understand reducer function in JS
=================================================================================

Array.prototype.reduce()
-------------------------
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

Understanding reduce function in Javascript
----------------------------------------------
var numbers = [1, 2, 3, 4];
function getSum(total, num) {
  return total + Math.round(num);
}

const final_result = numbers.reduce(getSum, 0);
console.log('final_result ==> ' , final_result); // expected output: 10
----------------------------------------------
/*
- The reduce() method reduces the array to a single value.
- The reduce() method executes a provided function for each value of the array (from left-to-right).
- The return value of the function is stored in an accumulator (result/total).
*/

//using arrow function
----------------------------------------------
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const result = array1.reduce(reducer); 
console.log('result is : ==> ' , result); // expected output: 10

const result2 = array1.reduce(reducer,5);
console.log('result is : ==> ' , result2); // expected output: 15
----------------------------------------------
Summary of reducer function in JS and useReducer in React is :

(1) arguments passed and return type
-------------------------------------
reduce in JS        ==>  array.reduce(reducer,initialValue) - returns a singleValue

useReducer in React ==>  useReducer(reducer,initialState) - returns a pair of values          "newState" and "dispatch"

(2) reducer function arguments 
-------------------------------
reduce in JS  ==>   const reducer = (accumulator, currentValue) => accumulator + currentValue;

reducer function in React :
const reducer = (currentState,action) => {
    switch(action){
        case 'increment':
            return currentState+1;
        
        case 'decrement':
            return currentState-1;
        
        case 'reset':
            return initialState;

        default:
            return currentState;
    }
}
==========================================================================


