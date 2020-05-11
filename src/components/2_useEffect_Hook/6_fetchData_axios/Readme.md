we need to fetch data from - https://jsonplaceholder.typicode.com/posts

in useEffect we much pass empty array so that axios call is only once else
it will call infinite times because once called we are updating state using setPost
so it called again and display same value but again setPosts is called that updates state hence called
again so this way it becomes infinite loop

so we must call once only