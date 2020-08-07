import React from "react";
import Icon from "../icon";
import fbLogo from "../../../images/facebook.svg";
import refreshIcon from "../../../images/refresh.svg";

export default {
  title: "Atoms",
};

export const icon = () => (
  <div>
    <Icon src={fbLogo} />
    <Icon src={refreshIcon} rotate="true" />
  </div>
);
