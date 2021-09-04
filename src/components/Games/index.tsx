import React, { FC } from "react";
import { Flex } from "reflexbox";

import { TGame } from "./types";
import { Text } from "../Text";
import { StyledGame as Game, StyledGrid as Grid } from "./styles";
import { TTheme } from "../../theme/types";
import { useTheme } from "styled-components";

const Games: FC<{ games?: TGame[] }> = ({ games }) => {
  const theme = useTheme() as TTheme;

  return (
    <Flex flex={1} width="100%" justifyContent="center" backgroundColor="white">
      <Flex mb="30px" flexDirection="column" backgroundColor="white">
        <Flex>
          <Text
            color={theme.colors.blue}
            pb="17px"
            fontSize={24}
            desktopSize={24}
            lineHeight="26px"
            fontWeight="500"
          >
            Included Games
          </Text>
        </Flex>
        <Grid>
          {(games || []).map(game => (
            <Game key={game.title} src={game.src} />
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export { Games };
