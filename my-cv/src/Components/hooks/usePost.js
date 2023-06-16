import {useMemo}  from "react";

export const useSOrtedPosts = (posts, sort) => {
    const sortedPost = useMemo(()=>{
        if(sort){
          return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
      },[sort, posts]);

      return sortedPost ;
}

export const usePosts = (posts, sort, query) => {
    const sortedPost = useSOrtedPosts(posts,sort) 
    const sortedAndSearchesPosts = useMemo(()=>{
        return sortedPost.filter(post=> post.title.toLowerCase().includes(query))
},[query, sortedPost])

return sortedAndSearchesPosts;

}