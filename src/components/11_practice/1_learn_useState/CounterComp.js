import Axios from 'axios';
import React,{useState,useEffect} from 'react';

function CounterComp(props) {
    const [count,setCount] = useState(0);
    const [id,set_id] = useState(0);
    const [name,setName] = useState('');
    const [nameArray,setNameArray] = useState([]);
    const clickHandler = () => {
        console.log('clickHandler !!!');
        setCount((prevCount)=> prevCount + 1);
    }

    const [names,setNames] = useState([]);

    useEffect(() => {
       console.log('useEffect with blank array !!');
        //fetch data start
        const axios = require('axios');
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(function (response) {
                    // handle success
                    console.log('axios - then - 1');
                    console.log('response ==> ' , response.data);
                    if(response.data){
                        console.log('array size is : ' , response.data.length);
                        setNameArray(response.data);
                        console.log('nameArray ' , nameArray);
                    }
            })
            .catch(function (error) {
                    // handle error
                    console.log('axios - catch - 1');
                    console.log(error);
            })
            .then(function () {
                    // always executed
                    console.log('axios - always - 1');
            });
        //fetch data ends
    }, []);



    useEffect(() => {
       
        //fetch data start
        const axios = require('axios');
        if(id && id>0){

        
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(function (response) {
                    // handle success
                    console.log('axios - then - 2');
                    
                    console.log('response ==> ' , response.data.name);
                    if(response.data.name){
                        setName(response.data.name);
                    }else{
                        setName("Not Available");
                    }
            })
            .catch(function (error) {
                    // handle error
                    console.log('axios - catch - 2');
                    console.log(error);
                    setName("Not Available");
            })
            .then(function () {
                    // always executed
                    console.log('axios - always -2');
            });
        }
        //fetch data ends
    }, [id]);

    const loadSpecificId = (event) => {
        console.log('loadSpecificId !!! ' , event.target.value);
        set_id(event.target.value);

    }

    return (
       <div>
           This is functional component using hooks
           <br/>
           <button onClick={clickHandler}>Clicked {count} times</button>
           <div>
                <div> Fetched Data is Below:   </div>
                <ul>
                    {nameArray.map(item => (
                        <li key={item.id}> {item.name} </li>
                        ))}
                </ul>
                <br/> <br/>
               Name for id  <input type="text" onChange={loadSpecificId} /> is {name}
                  
        
            </div>
               


       </div>
    )
}

export default CounterComp;
