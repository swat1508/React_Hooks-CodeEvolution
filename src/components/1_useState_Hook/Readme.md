React Hooks:
-----------
Hooks are a new feature addition in React Version 16.8 which allows us to use React features without having to write a class

Why Hooks?
----------
(1) - Avoid whole confusion with the use of this keyword
(2) - classes dont minify very well and make hot reloading unreliable
(3) - No particular way to reuse stateful component logic . HOC and render props do address this problem 
      but make code difficult to follow. So need to share stateful logic in better way 
(4) -  In Class Components, the related code is not organized in one places but scattered
e.g - Data fetching is generally done in componentDidMount and also sometimes in componentDidUpdate
    - EventListener is added in componentDidMount and removed in componentWillUnmount
So completely unrelated events(here Data fetching and EventListener) in same code block.This is solved in Hooks

Rules of Hooks 
--------------
(1) Only call Hooks at top level and so don't call hooks inside loops, conditions or nested functions

(2) Only call Hooks from "React functions" 
- Call from within React functional components and not just any regular JS function


useState
========
(1) It let us add state to functional components

(2) In class state is always an object, but with useState hook, the state doesnot have to be an object

(3) It returns array with 2 elements
    - current value of state
    - setter function

(4) In case new state value depends on previous state value,we can pass a function to setter function. The setter function will receive previous state as argument.

(5) when dealing with object or arrays, always make sure to spread your state variable and then call setter function.


