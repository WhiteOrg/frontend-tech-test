import React from "react";
import "./description.scss";

const Description = (props: { text: string }) => {
  return (
    <div className="description">
      <p>{props.text}</p>
    </div>
  );
};

export default Description;
