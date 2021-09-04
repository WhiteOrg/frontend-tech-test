import React, { FC } from "react";
import { Flex } from "reflexbox";

import { Text } from "../Text";
import { StyledBackground as Background } from "./styles";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Facebook } from "../../images/facebook.svg";

const Footer: FC = () => {
  return (
    <Background>
      <Text color="#f9cb11" fontSize={16} fontWeight={500} mb={15}>
        Share this Tournament
      </Text>
      <Flex>
        <Flex mr="5px">
          <Facebook />
        </Flex>
        <Flex ml="5px">
          <Twitter />
        </Flex>
      </Flex>
    </Background>
  );
};

export { Footer };
