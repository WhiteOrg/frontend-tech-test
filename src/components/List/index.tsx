import React, { FC } from "react";

import { TList } from "./types";
import {
  StyledItemWrapper as ItemWrapper,
  StyledSeparator as Separator,
  StyledListWrapper as ListWrapper,
} from "./styles";

const List: FC<TList> = ({ items, render }) => {
  return (
    <ListWrapper>
      {items.map((item, index) => (
        <>
          <ItemWrapper>{render(item, index)}</ItemWrapper>
          <Separator />
        </>
      ))}
    </ListWrapper>
  );
};

export { List };
