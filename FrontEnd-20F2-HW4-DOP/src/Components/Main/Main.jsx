import React from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './main.css'

const Main = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const onBack = () => navigate(-1);
  return (
    <div>
    <header className='minos'>
    <h1><Link className='Link' to='/' state={{from: location.pathname}}>Main</Link></h1>
    <h1><Link className='Link' to='/users' state={{from: location.pathname}}>Users</Link></h1>
    <h1><Link className='Link' to='/posts' state={{from: location.pathname}}>Posts</Link></h1>
    </header>
    </div>
  )
}

export default Main