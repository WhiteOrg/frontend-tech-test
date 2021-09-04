import styled from "styled-components";
import { space } from "styled-system";

import { TText } from "./types";

const StyledText = styled.div<TText>`
  ${space};
  letter-spacing: ${({ letterSpacing = 0.7 }) => letterSpacing};
  font-weight: ${({ fontWeight = 400 }) => fontWeight};
  text-transform: ${({ textTransform }) => textTransform};
  font-size: ${({ theme, desktopSize }) =>
    typeof desktopSize === "number"
      ? `${desktopSize}px`
      : theme.fontSize[desktopSize || "regular"]};
  color: ${({ theme, color }) => color || theme.colors.black};
  line-height: ${({ lineHeight }) => lineHeight && lineHeight};
  font-family: ${({ fontFamily }) => fontFamily};

  @media (max-width: 375px) {
    font-size: ${({ theme, fontSize }) =>
      typeof fontSize === "number" ? `${fontSize}px` : theme.fontSize[fontSize || "regular"]};
  }
`;

export { StyledText };
