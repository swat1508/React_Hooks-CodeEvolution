import React,{useState} from 'react'

function Child_Comp(props) {
    const [myname,setName]=useState({myfirstName:'',mylastName:''});

const changeName = (event) => {
    console.log(event.target.id , '  =============   ',event.target.value)
    const varName = event.target.id
    if(event.target.id === 'myfirstName'){
        console.log('setting first name')
        setName({
            ...myname,
            myfirstName : event.target.value
        })
    }
    if(event.target.id === 'mylastName'){
        console.log('setting last name')
        setName({
            ...myname,
            mylastName : event.target.value
        })
    }    
}


    const updateName = () => {
        console.log('first name is : ' , myname.myfirstName)
        console.log('last name is : ' , myname.mylastName)
        console.log('props => ' , props);
         props.setName({          
            firstName:myname.myfirstName,
            lastName:myname.mylastName
        })
        
    }

    return (
        <div>
            <div>this is child component</div>
            <input type="text" id="myfirstName" onChange={changeName}/>
            <input type="text" id="mylastName" onChange={changeName}/>
            <button type="submit" onClick={updateName}>Submit</button>
        </div>
    )
}

export default Child_Comp;
