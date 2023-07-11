import React, { useState, useEffect } from "react";
const SimpleCounter = () => {
    const [count, setCount] = useState (0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => (prevCount + 1) % 10000000);
      }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

// Calculate digit values
const seventhDigit = Math.floor((count / 1000000) % 10);
const sixthDigit = Math.floor((count / 100000) % 10);
const fifthDigit = Math.floor((count / 10000) % 10);
const fourthDigit = Math.floor((count / 1000) % 10);
const thirdDigit = Math.floor((count / 100) % 10);
const secondDigit = Math.floor((count / 10) % 10);
const firstDigit = Math.floor(count % 10);


return (
  <div className="backcounter">
    <div className="d-flex justify-content-center card-body text-bg-dark mb-4 p-4 w-100 ">
      <div className="card">
        <h5 className="clock"><i className="fas fa-clock text-white "></i></h5>
      </div>
      <div className="card" id="seventh-digit">
        <h5 className="counter-number text-white">{seventhDigit}</h5>
      </div>
      <div className="card" id="sixth-digit">
        <h5 className="counter-number text-white">{sixthDigit}</h5>
      </div>
      <div className="card" id="fifth-digit">
        <h5 className="counter-number text-white">{fifthDigit}</h5>
      </div>
      <div className="card" id="fourth-digit">
        <h5 className="counter-number text-white">{fourthDigit}</h5>
      </div>
      <div className="card" id="third-digit">
        <h5 className="counter-number text-white">{thirdDigit}</h5>
      </div>
      <div className="card" id="second-digit">
        <h5 className="counter-number text-white">{secondDigit}</h5>
      </div>
      <div className="card" id="first-digit">
        <h5 className="counter-number text-white">{firstDigit}</h5>
      </div>
    </div>
  </div>
);

}

export default SimpleCounter;
