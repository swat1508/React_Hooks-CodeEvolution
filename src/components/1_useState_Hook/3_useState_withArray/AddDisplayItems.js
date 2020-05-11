import React, { useState } from 'react'

function AddDisplayItems() {

const [items,setItems]=useState([]);
const addItems=() =>{
    const randomNumber = Math.floor(Math.random()*100);
    console.log('addItems => ' , randomNumber);
    const randomItem = {
        id: items.length,
        value:randomNumber
    }
    setItems([...items,randomItem]);
}

    return (
        <div>
            <button onClick={addItems}>Add A New Item</button>
            
          {items.map(item => (
            <li key={item.id}> {item.value} </li>
          ))}


        </div>
    )
}

export default AddDisplayItems

