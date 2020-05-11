import React,{useReducer,useEffect} from 'react';
import axios from 'axios';

const initialState= {
    loading:true,
    error:'',
    posts:{}
}
const reducer= (currentState,action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':{
            console.log('payload => ' ,action.payload)
            return {
                loading:false,
                error:'',
                posts:action.payload
            }
        }

        case 'FETCH_ERROR':{
            console.log('payload => ' ,action.payload)
            return {
                loading:false,
                error:action.payload,
                posts:{}
            }
        }
        default:
            return initialState;
    }
}
function Fetch_Using_useReducer() {
    const [myState,dispatch] = useReducer(reducer,initialState);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/3')
            .then(response => {
                console.log('dispatching success')
               dispatch({type:'FETCH_SUCCESS', payload:response.data})
            })
            .catch(error => {
                console.log('dispatching error')
                dispatch({type:'FETCH_ERROR', payload:'something went wrong'})
            })
    },[]);

    return (
        <div>
             {myState.loading ? 'Loading ' : myState.posts.title}
            {myState.error ? myState.error : null}
           
            
        </div>
    )
}

export default Fetch_Using_useReducer
