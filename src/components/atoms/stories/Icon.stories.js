import React from "react";
import Icon from "../icon";
import fbLogo from "../../../images/facebook.svg";
import refreshIcon from "../../../images/refresh.svg";
import { withKnobs, boolean } from "@storybook/addon-knobs";

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
      <Icon src={refreshIcon} rotate={boolean("Rotate", true)} />
    </div>
  </div>
);
