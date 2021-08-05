import React from "react";
import Avatar from "./Avatar";
import Para from "./Para";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Para ParaInfo={props.tel} />
        <Para ParaInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
