we will see how to fetchdata using useReducer
 forst we will see how to do it using useState in file  ==>  Fetch_Using_useState
and then we will see how to do using useReducer in file ==> Fetch_Using_useReducer


when to use useState and when to use useReducer
================================================
(1) type of state
number,boolean,state => useState
object,array => useReducer

(2) Number of state transitions
one or two => useState
too many => useReducer

(3) related state transition
no=>  useState
yes=> useReducer

(4) business logic
simple  => useState
complex  => useReducer

(5) Local or global state
local state => useState
global state => useReducer
