import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDecrement, setIncrement } from '../../Store/slices/Counter';

const Counter = () => {
    const {count} = useSelector((state) => state.counter);
    const dispatch =useDispatch();

    const onIncrement = () => dispatch(setIncrement())
    const onDecrement = () => dispatch(setDecrement())

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={onIncrement}>INC</button>
        <button onClick={onDecrement}>DEC</button>
    </div>
  )
}

export default Counter