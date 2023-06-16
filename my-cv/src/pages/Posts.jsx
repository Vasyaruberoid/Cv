import React, { useEffect, useState } from 'react'
import PostList from '../Components/PostList';
import PostForm from '../Components/PostForm';
import PostFilter from '../Components/PostFilter';
import MyModal from '../Components/UI/modal/MyModal';
import MyButton from '../Components/UI/button/Mybutton';
import {usePosts} from '../Components/hooks/usePost';
import PostService from '../Api/PostService';
import Loader from '../Components/UI/loader/Loader';
import useFeching from '../Components/hooks/useFeching';
import getPageCount from '../utlis/pages';
import Pagination from '../Components/UI/Pagination/pagination';



function Posts() {

const [posts, setPosts] = useState([]);
const [filter, setFilter] = useState({sort: '', query: ''});
const [modal, setModal] = useState(false);
const [totalPages, setTotalPages] = useState(0);
const [limit, setLimit] = useState(10);
const [page, setPage] = useState(1);
const sortedAndSearchesPosts = usePosts(posts, filter.sort, filter.query);


const [fetchPosts, isPostsLoading, postError] =  useFeching( async (limit, page) => {
  const response = await PostService.getAll(limit, page);
  setPosts(response.data);
  const totalCount = response.headers['x-total-count']
  setTotalPages(getPageCount(totalCount, limit))
 
})

useEffect( () => {
  fetchPosts(limit, page)
}, [])

const createPost = (newPost) => {
  setPosts([...posts, newPost])
  setModal(false)
}


const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
  }

const changePage = (page) => {
  setPage(page)
  fetchPosts(limit,page)
}

return (
    <div className="App"> 
      <MyButton style={{marginTop: 30}} onClick = {() => setModal(true)}>
        Create user
      </MyButton>
    <MyModal visible={modal} setVisible={setModal}>
    <PostForm create = {createPost}/> 
    </MyModal>
    <hr style={{margin: '15px 0'}}></hr>
    <PostFilter
    filter = {filter}
    setFilter = {setFilter}
    />
    {postError &&
     <h1>Error ${postError}</h1>}
    {isPostsLoading 
    ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 100}}>
      <Loader/>
      </div>
    : <PostList 
    remove={removePost} 
    posts={sortedAndSearchesPosts} 
    title={'List Posts 1'}
    />  
    }
   <Pagination page = {page} changePage = {changePage} totalPages = {totalPages}></Pagination>
  
    </div>
);
}
    

export default Posts;
