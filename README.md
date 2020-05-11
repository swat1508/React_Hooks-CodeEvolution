React Hooks
===========
Hooks are a new feature added in React 16.8 which allow us to use React features without having to write
a class

- Hooks dont work inside classes 

why hooks>
-----------
(1) complexity with this keyword in classes

(2) remember to bind event handlers in class components

(3) classes don't minify very well and make hot reloading very unreliable


More detailed reason
---------------------
=> There is no particular way to reuse stateful component logic. HOC and render props patterns do 
address this problem but it needs restructuring components which becomes complex.
So need to share stateful logic in better way

=> Creating components for complex scenarios such as data fetching, subscribing to events related code is
not organized in one place
eg. data fetching - in componentDidMount and componentDidUpdate
    event listeners - In componentDidMount and componentWillUnmount

and because of stateful logic,we cannot break components into smaller ones


Note :
(1) React version 16.8 or higher
(2) completely optional
(3) hooks dont contain any breaking changes and release is 100% backwards compatible
(4) classes wont be removed from React
(5) cant use Hooks in class component
(6) hooks dont replace existing knowledge of React concepts


Rules of Hooks
==============
(1) Only call hooks at the top level
dont call hooks inside loops,conditions or nested function

(2)Only call hooks from React functions
call them from within React funtional components and not just any regular JS function
