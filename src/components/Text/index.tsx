import React, { FC } from "react";

import { StyledText } from "./styles";
import { TText } from "./types";

const Text: FC<TText> = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export { Text };
