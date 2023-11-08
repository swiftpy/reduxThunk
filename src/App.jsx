import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./Slices/asyncFunc.jsx/fetchUsers";

function App() {

  const data = useSelector(state=>state)

  const dispatch = useDispatch();

  console.log(data)

  return (
    <>
      <button onClick={()=>dispatch(fetchUsers())}>get Users</button>
    </>
  )
}

export default App
