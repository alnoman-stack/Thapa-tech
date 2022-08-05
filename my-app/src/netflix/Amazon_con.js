import React from "react";

import Card from "./Card";
import sdata from "./Sdata";

function AmazonCon() {
  return (
    <Card
      key={sdata[3].id}
      imgsrc={sdata[3].imgsrc}
      title={sdata[3].title}
      sname={sdata[3].sname}
      link={sdata[3].link}
    />
  );
}

export default AmazonCon;
