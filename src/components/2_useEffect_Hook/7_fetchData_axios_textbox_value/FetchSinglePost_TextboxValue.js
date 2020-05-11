import React,{useState,useEffect} from 'react'
import axios from 'axios';

function FetchSinglePost_TextboxValue() {
const [post,setPost]= useState('');
const [id_textBox,setTextboxValue]= useState(1); //initialize with 1 so that 1st post is fetched on pageload

useEffect(()=>{
if(id_textBox){ //while changing value textbox becomes empty so that time no need to call
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id_textBox}`)
        .then(res => {
            console.log('response is : ' , res.data.title);
            setPost(res.data)
        })
        .catch(err => {
            console.log('error is : ' , err)
        })
    }

},[id_textBox])

    return (
        <div>
<input type="text" value={id_textBox} onChange={(event) => setTextboxValue(event.target.value)} />
The fetched post is below :
<div>
    {post.title}
</div>

        </div>
    )
}

export default FetchSinglePost_TextboxValue
