import React from "react";
import { string } from "prop-types";
import { LoaderAndErrorWrapper, SectionHeader } from "../styles/styles";
import WarningIcon from "../assets/images/warning.svg";

const Error = ({ text }) => (
  <LoaderAndErrorWrapper>
    <img src={WarningIcon} alt="warning" />
    <SectionHeader>{text}</SectionHeader>
  </LoaderAndErrorWrapper>
);

Error.propTypes = {
  text: string,
};

export default Error;
