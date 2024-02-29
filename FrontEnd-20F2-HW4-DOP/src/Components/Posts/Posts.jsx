import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchAllPosts from '../../Store/creators/PostsCreators'
import { Link } from 'react-router-dom'
import './posts.css'

const Posts = () => {
    const { isLoadingPosts, posts, isErrorPosts } = useSelector((state) => state.postsList)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchAllPosts());
    }, []);
  return (
    <div>
      {isLoadingPosts && '...loading'}
      {isErrorPosts && isErrorPosts}
      {posts.length !== 0 && 
      posts?.map((post) => (
        <div key={post.id}>
          <div className='title'><h1>{post.id}</h1>
            <p>{post.title}</p>
          <p>{post.body.slice(0, 20)} <Link to={`/posts/${post.id}`}>More...</Link></p></div>
        </div>
      ))}
      <p>waiting for something to happen?</p>
    </div>
  )
}

export default Posts
