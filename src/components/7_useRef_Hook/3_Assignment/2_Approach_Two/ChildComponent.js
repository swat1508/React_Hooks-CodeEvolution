import React, { useState } from 'react'

const ChildComponent = React.forwardRef((props,ref) => {
const [myName, setmyName] = useState({
    fn:'swat',
    ln:'sinha'
})
           
    const setNamesAsInTextBox = () =>{
        console.log('setNamesAsInTextBox ' , myName.fn , '  ----  ' , myName.ln);                  
      ref({
        firstName: myName.fn,
        lastName:myName.ln
    })
    }

             return (
                <div>
    <input type="text" id="fn" onChange={(event)=> setmyName({...myName,fn:event.target.value})}/>
    <input type="text" id="ln" onChange={(event)=> setmyName({...myName,ln:event.target.value})}/>
    <button type="submit" onClick={setNamesAsInTextBox}>Click Me</button>
                </div>
            )
})

export default ChildComponent
