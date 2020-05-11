In folder 3_useEffect_run__only_once, we have AddEventListener.js
which display mouse position

Now say we we have a component "ToggleMouseDisplayComp" with toggle button
that display and hide the above component which shows mouse position

if can see that even though the component is hidden mousemove event is still atttached

so if we hide it and then move mouse it will display error like 
"Warning: Can't perform a React state update on an unmounted component"
so even though component is removed the event listener attached to it is still there
hence we need to cancel all subscription and listeners when component is unmounted

in class based we used "componentWillUnmount"
in functional component we can use "useEffect return "

