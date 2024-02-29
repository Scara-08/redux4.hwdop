import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux';

const PostsDetails = () => {
    const params = useParams();
    const [post, setPost] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    // const { isLoadingPosts, posts, isErrorPosts } = useSelector((state) => state.postsList)
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch.isLoadingPosts(true)
    //   dispatch.posts(null)
    //   dispatch.isErrorPosts('')
    //   fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    //   .then((response) => response.json())
    //   .then((data) => dispatch.posts(data))
    //   .catch((err) => dispatch.isErrorPosts(err.message))
    //   .finally(() => dispatch.isLoadingPosts(false))
    // });
    useEffect(() =>{
      setIsLoading(true);
      setPost(null)
      setError('');
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false))
    }, [])
  return (
    <div>
      <h1>{post && JSON.stringify(post.id)}</h1>
      <h1>{post && JSON.stringify(post.title)}</h1>
      <h1>{post && JSON.stringify(post.body)}</h1>
    </div>
  )
}

export default PostsDetails