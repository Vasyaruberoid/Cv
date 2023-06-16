import React, {useState} from "react";
import MyInput from './UI/Input/MyInput';
import MyButton from './UI/button/Mybutton';


const PostForm = ({create}) => {
  
  const [post, setPost] = useState({title: '', body: ''});

    function addNewPost(e){
        e.preventDefault();
      const newPost = {
        ...post, id: Date.now()
      }
      create(newPost)
      setPost({title: '', body: ''})
      }
    
    return(
        <form>
        <MyInput
        value={post.title}
        onChange = {e => setPost({...post, title: e.target.value})}
        type='text' placeholder='Name post'/>
        <MyInput
       value = {post.body}
       onChange = {e => setPost({...post, body: e.target.value})}
         type='text'
          placeholder='description post'/>
        <MyButton onClick ={addNewPost}>Create post</MyButton>
      </form>
    )

}
export default PostForm;