import React from 'react'
import './Comp2.css'

function Comp2(props) {
    console.log(props.cricList)
    const myStyle={
        backgroundColor : 'green'
    }
    let classes=[];

   const setClassesDynamically = (classes,cricName,arrayLen) =>{
    
    if(arrayLen===5) 
        classes.push('text-pink') 
    else 
        classes.push('text-orange')
    

   if(cricName === 'saurav')
        classes.push('red')

   }
    return (
        <div style={myStyle}>
  
    {
    props.cricList.map( (cricName,index) => {
        setClassesDynamically(classes,cricName,props.cricList.length);
        return <div key={index}>
        <div className={classes.join(' ')}> {cricName}  </div>
                    </div>
          })
          
}

        </div>
    )
}

export default Comp2
/*
name={person.name} 
          age={person.age}
          key={person.id}
        click={ () => this.deletePersonHandler(index) }  //working (video lecture           
        changed= {(event) => this.nameChangedHandler(event,person.id)} //working (video lecture code) 
                
*/