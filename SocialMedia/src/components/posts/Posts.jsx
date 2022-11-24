import React from 'react'
import './Posts.css'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../Post/Post'
import { useEffect } from 'react'
import { getTimelinePosts } from '../../action/PostAction'
import { useState } from 'react'
import  {getAllPost } from '../../api/PostRequest.js'


const Posts = () => {

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData)
  let { posts, loading } = useSelector((state) => state.postReducer)
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    dispatch(getTimelinePosts(user._id))
  }, [])


  useEffect(()=>{
    const posts = async() =>{
        const {data} = await getAllPost();
        setAllPosts(data)
         console.log(data);

    }
    posts()
},[posts])






  
  // if (!posts) return " no posts";
  // if(params.id){
  //   posts = posts.map((post)=> post.userId === params.id)
  // }

 
 
  return (
    <div className="Posts">
      {loading ? "Fetching posts..." : allPosts.map((post,_id) => {
            
        return <Post data={post} key={_id}  />
        
        
      })}
    </div>

  )
}

export default Posts