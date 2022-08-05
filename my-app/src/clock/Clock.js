import React, { useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <div className="div1">
        <h1>{ctime}</h1>
      </div>
    </>
  );
};

export default Clock;
