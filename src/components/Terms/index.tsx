import React, { FC } from "react";
import { Flex } from "reflexbox";
import { Text } from "../Text";
import { Wrapper } from "./styles";

const Terms: FC<{ terms?: string[] }> = ({ terms = [] }) => {
  return (
    <Wrapper>
      <Flex justifyContent="center">
        <Text fontSize={24} desktopSize={24} fontWeight={500} mb={20}>
          Terms & Conditions
        </Text>
      </Flex>
      {terms.map(term => (
        <Flex mb="2px" alignItems="flex-start">
          <Flex mr={14}>•</Flex>
          <Flex>
            <Text
              fontSize={14}
              desktopSize={14}
              fontWeight="normal"
              lineHeight="22px"
              letterSpacing="normal"
              fontFamily="Roboto"
            >
              {term}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Wrapper>
  );
};

export { Terms };
