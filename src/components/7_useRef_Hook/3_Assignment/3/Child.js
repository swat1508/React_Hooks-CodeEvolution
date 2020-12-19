import React,{useState} from 'react'


function Child(props,ref) {
    const [name, setname] = useState({
        firstName:'',
        lastName:''
    })
    
   
    const passToParent = () => {
        ref.ref1.current= name.firstName;
        ref.ref2.current = name.lastName;
        console.log(ref.ref1.current, ' =====  ' , ref.ref2.current)
    }
    
    return (
        <div>
           <input type="text"  onChange={(event) => setname({...name,firstName:event.target.value})} />
           <input type="text"  onChange={(event) => setname({...name,lastName:event.target.value}) }/>
           <button type="submit" onClick={passToParent}>OK</button>
        </div>
    )
}

const forwardChild = React.forwardRef(Child);
export default forwardChild;
