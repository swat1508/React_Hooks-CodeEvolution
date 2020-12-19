import React,{useState} from 'react';
function FirstNameLastName(){
 const [name,setName] = useState({first_name:'' , last_name:''});
    const handleChange = (event) => {
        console.log('handleChange ==> ');
        const myId = event.target.id;
        const value = event.target.value;
        console.log({...name});
        console.log('myId is : ' , myId);
        console.log('value is : ' , value);
        if(myId == 'first_name'){
            setName({
                ...name,
                first_name:value
            });
        }else if(myId == 'last_name'){
            setName({
                ...name,
                last_name :value
            });
        }
       
    }


    return (
        <div>
            <form>
                <div>
                First Name : <input type="text" id="first_name" value={name.first_name} onChange={handleChange} />
                </div>
              <br/>
                <div>
                Last Name : <input type="text" id="last_name" value={name.last_name} onChange={handleChange} />
                </div>
                <br/>
              First Name is : {name.first_name}  and Last Name is : {name.last_name}
            </form>
        </div>
    )
}

export default FirstNameLastName;