import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './Fetures/counter/counterSlice'

function App() {
  const [amount, setAmount] = useState(0)

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleIncrement() {
    dispatch(increment())
  }
  function handleDecrement() {
    dispatch(decrement())
  }
  function handelamount() {
    dispatch(incrementByAmount(Number(amount)))
  }
  function handlereset() {
    dispatch(reset())
  }

  return (
    <div className='container'>
      <button className="increment" onClick={handleIncrement}>+</button>
      <h1>count : {count}</h1>
      <button className="decrement" onClick={handleDecrement}>-</button>
      <br />
      <br />
      <button className="reset" onClick={handlereset}>Reset</button>
      <br />
      <br />
      <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder='Value...'/>
      <button className="amount" onClick={handelamount}>Set Amount Value</button>
    </div>

  )
}

export default App
