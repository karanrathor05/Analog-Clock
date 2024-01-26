
import React, { useState } from 'react'
import './index.css'
const App = () => {
  const[digitTime,setDigitTime]=useState('0:0:0');
  const[clockDegree, setClockDegree]=useState([]);
  document.title="Analog and Digital Clock";
  setInterval(()=>{
    const d=new Date();
    const hr=d.getHours();
    const hrr=hr>12?hr-12:hr;
    const min=d.getMinutes();
    const sec=d.getSeconds();

    const hrToDegree=30*hr+min/2;
    const minToDegree=6*min;
    const secToDegree=6*sec;
    setDigitTime(`${hrr}:${min}:${sec}`);
    setClockDegree([hrToDegree,minToDegree,secToDegree]);
    },1000)
  return (
    <div className='clockDiv'>
      <div className='digitalClock'>
        {`${digitTime}`}

      </div>
      <div className='hour' style={{"transform":`rotate(${clockDegree[0]}deg)`}}></div>
      <div className='minute' style={{"transform":`rotate(${clockDegree[1]}deg)`}}></div>
      <div className='second' style={{"transform":`rotate(${clockDegree[2]}deg)`}}></div>
    </div>
  )
}

export default App