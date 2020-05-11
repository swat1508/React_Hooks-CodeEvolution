in App.js,
<div className="App">
    <Counter_One />
    <Counter_Two/>
    </div>

    
CounterOne and CounterTwo have same functionality so we can implement a custom hook say "useCounter"
that has the common implementation and then CounterOne and CounterTwo can use this custom hook-"useCounter"

