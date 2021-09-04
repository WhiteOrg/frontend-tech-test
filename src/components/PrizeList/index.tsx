import React, { FC } from "react";
import { Flex } from "reflexbox";

import { Text } from "../Text";
import { List } from "../List";
import { TPrize, TPrizeList } from "./types";
import { TItem } from "../List/types";
import { StyledSeparator as Separator, StyledWrapper as Wrapper } from "./styles";
import { ReactComponent as Refresh } from "../../images/refresh.svg";
import ReactLoading from "react-loading";

const PrizeList: FC<TPrizeList> = ({ prizeList = [], refresh, isLoading }) => {
  return (
    <Wrapper>
      <Flex flex={1} justifyContent="space-between" alignItems="center">
        <Text color="blue" fontSize={24} fontWeight={500} desktopSize={28}>
          Prize List
        </Text>
        <Refresh style={{ cursor: "pointer" }} onClick={refresh} />
      </Flex>

      {isLoading ? (
        <Flex justifyContent="center" mt={45}>
          <ReactLoading type="spin" color="#091870" width="35px" height="35px" />
        </Flex>
      ) : (
        <>
          <Separator />
          <List
            items={prizeList}
            render={(item: TItem<TPrize>, index) => (
              <Flex>
                <Flex flex={1}>
                  <Text fontWeight={600} fontSize={16}>
                    {index + 1}
                  </Text>
                </Flex>
                <Flex flex={4}>
                  <Text fontWeight={600} fontSize={16}>
                    {item.title}
                  </Text>
                </Flex>
                <Flex flex={2} justifyContent="flex-end">
                  <Text fontWeight={600} fontSize={16}>
                    {item.total}
                  </Text>
                </Flex>
              </Flex>
            )}
          />
          <Separator />
        </>
      )}
    </Wrapper>
  );
};

export { PrizeList };
