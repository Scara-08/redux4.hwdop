import React from 'react'
import { Counter, Users, Posts, PostsDetails, Main } from './Components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Main />} path='/'>Home</Route>
        <Route element={<Users/>} path='/users'>Users</Route>
        <Route element={<Posts/>} path='posts'>Posts</Route>
        <Route element={<PostsDetails/>} path='/posts/:id'>PostsDetails</Route>
        <Route element={<Counter />} path='/counter'>Counter</Route>
      </Routes>
    </Router>
  )
}

export default App