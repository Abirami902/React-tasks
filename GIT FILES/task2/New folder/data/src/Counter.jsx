import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, decrement, increment, removeData } from './counterSlice'
import { Link } from 'react-router-dom'

const Counter = () => {

const value=useSelector((state)=>state.counter.value)
const userData=useSelector((state)=>state.counter.data)
const dispatch=useDispatch()

let dele=(n)=>{
  dispatch(removeData(n))

}

  return (
    <div>
        <h2>{value}</h2>
        {userData?.map((item)=>(
          <>
         
          <h2 onClick={()=>dele(item.name)}>
            {item.name}
          </h2>
          <h2>
            {item.age}
          </h2>
          
          </>
        )
          
        )}

        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(addData([{name:'abc',age:44},{name:'xyz',age:45}]))}>Send data</button>
        <Link to='/fetchdata'>Next</Link>
    </div>
  )
}

export default Counter
