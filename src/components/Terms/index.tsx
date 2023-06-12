import React from "react";
import { TTermsList } from "../../utils/dataTypes";
import "./terms.scss";

const Terms = (props: { termsList: TTermsList }) => {
  const { termsList } = props;
  return (
    <div className="terms">
      <h2>Terms & Conditions</h2>
      <ul className="terms__list">
        {termsList.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Terms;
