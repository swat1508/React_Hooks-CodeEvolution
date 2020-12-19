import axios from 'axios';
import React,{useEffect,useReducer} from 'react';

const initial_state = {
    loading: true,
    error : false,
    posts:[]
};

const reducerFunc = (current_state , action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':{
            return {
                loading:false,
                error:false,
                posts: action.payload
            };
        }
        case 'FETCH_FAILURE':{
            return {
                loading:false,
                error : true,
                posts: []
            };
        }
        default :
            return initial_state;
    } 
}

function DataFetchUseReducer(props) {
    
const [myData,dispatch] = useReducer(reducerFunc,initial_state);
useEffect(() => {
    console.log('useEffect with empty array !!!');
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp => {
            console.log('data fetch is successful : ' , resp.data);
            dispatch({
                type: 'FETCH_SUCCESS',
                payload : resp.data
            });
        })
        .catch(err => {
            console.log('data fetch failed : ' , err);
            dispatch({
                type: 'FETCH_FAILURE',
                payload : []
            });

        })
},[]);    
    
    return (
       <div>
            Data Fetching Using use reducer !!!
            {
                myData.loading ? (<h2> Loading Data is in Progress </h2>) : null
            }
            {
                myData.error ? (<h2> Some error while fetching data </h2>) : null
            }
           
                <h2>Fetched Data is below : </h2>

                <ul>
                    {myData.posts.map(item => (
                        <li key={item.id}> {item.name} </li>
                        ))}
                </ul>
           
       </div>
    )
}

export default DataFetchUseReducer;
