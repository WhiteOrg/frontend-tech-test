import { addParameters } from "@storybook/react";

addParameters({
  backgrounds: [
    { name: "light", value: "#DCDCDC", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
    { name: "white", value: "#FFFFFF" },
  ],
});
