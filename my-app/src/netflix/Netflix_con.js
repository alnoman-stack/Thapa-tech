import React from "react";

import Card from "./Card";
import sdata from "./Sdata";

function NetflixCon() {
  return (
    <Card
      key={sdata[1].id}
      imgsrc={sdata[1].imgsrc}
      title={sdata[1].title}
      sname={sdata[1].sname}
      link={sdata[1].link}
    />
  );
}

export default NetflixCon;
