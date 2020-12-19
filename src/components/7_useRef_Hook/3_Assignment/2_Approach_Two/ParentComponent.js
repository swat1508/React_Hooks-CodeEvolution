import React,{useRef,useState} from 'react'
import ChildComponent from './ChildComponent';
function ParentComponent() {

    const [name, setName] = useState({
        firstName:'a',
        lastName:'z'
    })
    
    return (
        <div>
            <div>First Name : {name.firstName}</div>
            <div>Last Name : {name.lastName}</div>
            {/* <ChildComponent ref={updateNameAsInTextbox} /> */}
            <ChildComponent ref={setName} />
        </div>
    )
}

export default ParentComponent
