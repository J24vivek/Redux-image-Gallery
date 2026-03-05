import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount} from "./redux/features/counterSlice";

const App = () => {

  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)

  const [num, setNum] = useState()

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="w-50 text-center text-4xl bg-yellow-500 p-3 m-2 rounded">{count}</h1>

      <div>
        <button onClick={()=>{
          dispatch(increment())
        }} className="border px-2 py-1 m-2 rounded cursor-pointer">
          Increment
        </button>
        <button onClick={()=>{
          dispatch(decrement())
        }} className="border px-2 py-1 m-2 rounded cursor-pointer">
          Decrement
        </button>

        <br />


        <input type="number" placeholder="Amount ..." className="border px-2 py-1 m-2 rounded" value={num} onChange={(e)=>{
          setNum(e.target.value)
        }}/>
        <br />
        <button onClick={()=>{
          dispatch(incrementByAmount(Number(num)))
        }} className="border px-7 py-1 m-2 rounded cursor-pointer">Increase by Amount</button>
      </div>
    </div>
  );
};

export default App;
