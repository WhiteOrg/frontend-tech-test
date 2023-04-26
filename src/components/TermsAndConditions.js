import React from "react";
import { SectionHeader, Wrapper } from "../styles/styles";
import { tcs } from "../mock/tcs";

const TermsAndConditions = () => (
  <Wrapper terms>
    <SectionHeader>Terms & Conditions</SectionHeader>
    <ul>
      {tcs.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  </Wrapper>
);

export default TermsAndConditions;
