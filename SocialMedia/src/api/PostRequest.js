import axios from 'axios';
const API = axios.create({baseURL: "http://localhost:5000"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });


export const getTimelinePosts = (id)=> API.get(`/post/${id}/timeline`);
export const getTimelinePostsUser =() => {
  let userId = JSON.parse(localStorage.getItem('profile')).user._id
API.get(`/post/${userId}/usertimeline`)
} 
export const likePost = (id,userId) => API.put(`/post/${id}/like`,{userId : userId})
export const getAllPost = () =>API.get('/post')
export const deletePost = (id,userId) => API.put(`/post/${id}/${userId}/delete`)
export const getPost = (postId,data) => API.get(`/savedpost/${postId}/save`)
export const getComments=(postId)=>API.get(`/comment/getcomment/${postId}`)
export const commentPost=(data)=>{
  // for (const [key, value] of data.entries()) { 
  //   console.log(key, value);
  //  }
 
  API.post(`/comment/addcomment`,data)
}