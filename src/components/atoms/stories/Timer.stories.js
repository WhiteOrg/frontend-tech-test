import React from "react";
import Timer from "../timer";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Atoms",
  decorators: [withKnobs],
};

export const timer = () => (
  <div>
    <Timer>7</Timer>
  </div>
);
