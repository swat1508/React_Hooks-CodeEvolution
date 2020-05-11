import React, { useState } from 'react'
import AddEventListener from '../3_useEffect_run__only_once/AddEventListeners';
function ToggleMouseDisplayComp() {
    const [display,setDisplay] = useState(true);
    
    const toggleDisplay=() => {
        
        setDisplay(!display);
    }
    return (
        <div>
            
       <button onClick={toggleDisplay}>Toggle Display</button>     
{display && <AddEventListener/> }
    
        </div>
)
}

export default ToggleMouseDisplayComp
