import React,{useState,useEffect} from 'react'
import axios from 'axios';

function FetchAndDislayData() {
const [posts,setPosts] = useState([]);
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log('response is ' , res.data);
            setPosts(res.data);
        })
        .catch(err => {
            console.log('error is : ' , err)
        })
},[])
 
return (
        <div>
            {
                posts.map(post => (
                    <li key={post.id}> {post.title} </li>
                ))
            }
        </div>
    )
}

export default FetchAndDislayData
