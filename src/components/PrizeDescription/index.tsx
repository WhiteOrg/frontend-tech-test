import React, { FC } from "react";

import { Text } from "../Text";
import { Wrapper } from "./styles";
import { TPrizeDescription } from "./types";

const PrizeDescription: FC<TPrizeDescription> = ({ description }) => (
  <Wrapper>
    <Text fontSize={16} fontWeight={500} fontFamily="Roboto" lineHeight="22px">
      {description}
    </Text>
  </Wrapper>
);

export { PrizeDescription };
