import React from "react";
import Paragraph from "../paragraph";

export default {
  title: "Atoms",
};

export const paragraph = () => (
  <div>
    <Paragraph size="small" textColor="#17dfe7">
      PRIZE POOL
    </Paragraph>
    <Paragraph size="medium">P.C</Paragraph>
    <Paragraph size="large" textColor="white" bold>
      £25,000.00
    </Paragraph>
    <Paragraph>
      {" "}
      The search for gold starts in the Sahara Desert! There’s potential for big
      cash prizes of up to 1,000 your stake with the Free Spins feature so
      you’ll want to stock up on those Story Book Free Spin Symbols to get your
      chance.{" "}
    </Paragraph>
  </div>
);
