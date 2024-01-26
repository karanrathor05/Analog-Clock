
import React, { useState,useEffect } from 'react';
import './index'

const App= () => {
  const [count, setCount] = useState(0);
  const [countdown, setCountdown] = useState(null);

  const startCountdown = () => {
    setCountdown(count);
  };

  useEffect(() => {
    if (countdown !== null) {
      const intervalId = setInterval(() => {
        setCountdown((prevCount) => {
          if (prevCount === 0) {
            clearInterval(intervalId);
            return null;
          }
          return prevCount - 1;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [countdown]);

  return (
    <div className='k'>
      <input type="number" value={count} onChange={(e)=>setCount(e.target.value)} />
      <button onClick={startCountdown}>Start Countdown</button>
      {countdown !== null && <div className='h'>Countdown: {countdown}</div>}
      </div>
    
  );
};

export default App;