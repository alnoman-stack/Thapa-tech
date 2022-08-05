import React, { useState } from "react";

function HandleInc() {
  const [count, setCount] = useState(10);
  const HandleIncremant = () => {
    setCount(count + 1);
  };
  const HandleDecremant = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="div1">
        <h1>{count}</h1>
        <button onClick={HandleIncremant}>Increase</button>
        <button
          onClick={HandleDecremant}
          disabled={count === -3 ? true : false}
        >
          Decrease
        </button>
      </div>
    </>
  );
}

export default HandleInc;
