import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

 function DataFetchUseState(props) {
    const[loading,setLoading] = useState(true);    
    const[post,setPost] = useState([]);
    const[error,setError] = useState(false);
    
    useEffect(() => {
        console.log('useEffect with blank array !!!');
        axios.get('https://jsonplaceholder.typicode.com/users')
              .then(response => {
                  console.log('response is : ' , response.data);
                  if(response.data){
                        setLoading(false);
                        setPost(response.data);
                  }
              })
              .catch(err => {
                setLoading(false);
                setError(true);
              })
    },[]);

    return (
       <div>
           Data Fetching Using use state !!!
           {
               loading ? (<h1> Loading Data in progress</h1>) : null
           }
           {
                error ? (<h1> Some Error </h1>) : null
           }
           
           <ul>
                    {post.map(item => (
                        <li key={item.id}> {item.name} </li>
                        ))}
                </ul>
                <br/> <br/>

       </div>
    )
}
export default DataFetchUseState;
