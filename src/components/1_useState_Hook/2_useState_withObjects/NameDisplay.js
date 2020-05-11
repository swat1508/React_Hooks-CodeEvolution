import React,{useState} from 'react'

function NameDisplay() {
    
    const [name,setName]=useState({firstName:'',lastName:''});

    return (
        <form>
    
    <h2>First Name : {name.firstName}</h2>
    <h2>Last Name : {name.lastName}</h2>

        <input type="text" value={name.firstName} onChange={(event) => setName({...name,firstName:event.target.value})}/>
        <input type="text" value={name.lastName}  onChange={(event) => setName({...name,lastName:event.target.value})}/>
   
    <h3>{JSON.stringify(name)}</h3>
        </form>
    )
}

export default NameDisplay
