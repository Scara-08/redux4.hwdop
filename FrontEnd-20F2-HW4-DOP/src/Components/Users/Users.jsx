import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchAllUsers from '../../Store/creators/UsersCreators';

const Users = () => {
    const { isLoadingUsers, users, isErrorUsers } = useSelector((state) => state.userList)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchAllUsers())
    }, []);
  return (
    <div>
      <h1>List of Users</h1>
      <hr />
      <p>{isLoadingUsers && '...loading'}</p>
      <p>{isErrorUsers && isErrorUsers}</p>
      {users.length !== 0 && 
      users?.map((user) => (
        <div key={user.id}>
          <p>{user.name} - {user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Users;