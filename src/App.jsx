import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incNumber,decNumber } from './actions'

const App = () => {
  const myState = useSelector((state) => state.changeNum)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="container">
        <h1>Counter</h1>
        <h1>{myState}</h1>
        <button onClick={() => dispatch(incNumber())}>Increament</button>
        <button onClick={() => dispatch(decNumber())}>Decreament</button>
      </div>
    </div>
  )
}

export default App