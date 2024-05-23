import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment, IncreaseBy10, Decrement, Settozero} from './src/redux/Counter'

function Counter () {
    let count=useSelector((state)=>state.counter.value)
    let dispatch=useDispatch()
  return (
    <div>
      <h1 style={{"color":"white"}}>Counter </h1>
      <button onClick={()=>dispatch(Increment())}>Increment</button> <br />
      <button onClick={()=>dispatch(IncreaseBy10(10))}>Increment by 10</button>

      <p>{count}</p>
      <button onClick={()=>dispatch(Decrement())}>Decrement</button> <br />
      <button onClick={()=>dispatch(Settozero())}>Set to 0</button>
    </div>
  )
}

export default Counter
