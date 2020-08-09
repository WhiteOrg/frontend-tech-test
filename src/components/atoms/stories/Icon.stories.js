import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import Icon from "../icon";
import fbLogo from "../../../images/facebook.svg";
import refreshIcon from "../../../images/refresh.svg";

export default {
  title: "Atoms",
  decorators: [withKnobs],
};

export const icon = () => (
  <div>
    <div>
      <Icon src={fbLogo} />
    </div>
    <br />
    <div>
      <Icon src={refreshIcon} rotate={number("Rotate", 1)} />
    </div>
  </div>
);
