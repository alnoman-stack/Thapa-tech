import React from "react";

const Heading = (props) => {
  console.log(props);
  return <h3 className="card_title">{props.sname}</h3>;
};

export default Heading;
