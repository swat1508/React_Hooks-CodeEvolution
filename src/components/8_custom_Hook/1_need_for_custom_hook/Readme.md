Custom Hooks
============
A custom hook is basically a javascript function whose name starts with "use"
Note : A custom hook can also call other hooks if required

 why needed?
 -----------
 Share Logic - Alternative to HOCs and Render Props




 In App.js include
  <div className="App">
    <Counter_One />
    <Counter_Two/>
    </div>

 in CountOne and CountTwo components we can see thr logic to update title based on counter is same
 so we will create a custom hook to add this common feature


 we will see in folder - "2_implement_custom_hook" how to create a custom hook with the functionality of updating document title on basis of change in counter
 CounterOne and CounterTwo can use this custom hook
