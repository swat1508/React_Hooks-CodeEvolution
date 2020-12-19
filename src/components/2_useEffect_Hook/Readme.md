useEffect
----------
The effect hook let us perform side effects in functional components
It is a close replacement for "componentDidMount" , "componentDidUpdate" and "componentWillUnmount"

Note : 
(1) In Class Components, the related code is not organized in one places but scattered
e.g - Data fetching is generally done in componentDidMount and also sometimes in componentDidUpdate
    - EventListener is added in componentDidMount and removed in componentWillUnmount
So completely unrelated events(here Data fetching and EventListener) in same code block.This is solved in Hooks

(2) useEffect runs after every render




