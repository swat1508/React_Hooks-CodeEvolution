import React,{useState,useEffect} from 'react'

function RenderOnlyWhenCountChanges() {
    const [count,setCount]= useState(0);
    const [name,setName]= useState('');
   
    useEffect(() => {
     document.title=`Clicked ${count} times`   
     console.log('useEffect');
    },[count])


    return (
        <div>
         <input type="text" value={name} onChange={(event) => setName(event.target.value)} />  
         <button onClick={()=> setCount(count + 1)}>Clicked {count} times </button>   
           </div> 
        )
    }

export default RenderOnlyWhenCountChanges;