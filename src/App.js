import React, { useState } from "react";
import './index.css'
function App() {
  let time=new Date().toLocaleTimeString();
  const[etime,setTime]=useState(time);
  const update=()=>{
    time=new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(update,1000)
  return (
    <>
     <h1>{etime}</h1>
     
     
    </>
  );
}

export default App;
