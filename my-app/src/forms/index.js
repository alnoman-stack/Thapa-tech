import React, { useState } from "react";

function Index() {
  const [name, setName] = useState("");
  const [fullName, setFullname] = useState("");

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onSubmit = () => {
    setFullname(name);
  };

  return (
    <>
      <div className="div1">
        <h1>Hello {fullName}</h1>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={inputEvent}
          value={name}
        />
        <button type="submit" onClick={onSubmit}>
          Submit 👍
        </button>
      </div>
    </>
  );
}

export default Index;
