import React,{useState,useEffect} from 'react';
import axios from 'axios';


function FetchPostWithTextBoxValueButtonClick() {
    const [post,setPost] = useState('');
    const [id_textbox,setTextBoxId] = useState(1);
    const [id_for_button,setButtonClickId] = useState(1);

useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id_for_button}`)
        .then(res => {
            console.log('response is : ' , res)
            setPost(res.data.title)
        })
        .catch(err => {
            console.log('error is => ' , err)
        })
},[id_for_button])

const fetchPost = () => {
    console.log('button clicked and the id in textbox is :' , id_textbox);
    setButtonClickId(id_textbox);
}

    return (
        <div>
    
    <input type="text" value={id_textbox} onChange={(event)=> setTextBoxId(event.target.value)} />
    <button onClick={fetchPost}> Fetch Post</button>       

                    <div>The fetched post is :
                        <h1>{post}</h1>
                    </div>     
        </div>
    )
}

export default FetchPostWithTextBoxValueButtonClick
