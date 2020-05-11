useReducer hook is used for State Management
Its an alternative to useState
useState is build using useReducer
accepts 2 params - reducer function and initial state
Note: the reducer fuction also accepts 2 param - current state and action

So
useReducer (reducer,initialState)
newState = reducer(currentState,action)
useReducer returns a pair of values - newState & dispatch

useState => state
useEffect => side effect
useContext => Context Api
useReducer => reducer


Array.prototype.reduce()
-------------------------
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

---------------------------------------------------------
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
---------------------------------------------------------
==========================================================================================================

