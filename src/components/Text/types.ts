import { SpaceProps } from "styled-system";

import { TFontSize, TTheme } from "../../theme/types";

type TText = SpaceProps & {
  theme?: TTheme;
  fontSize?: TFontSize | number;
  desktopSize?: TFontSize | number;
  textTransform?: string;
  color?: string;
  fontWeight?: string | number;
  lineHeight?: string;
  fontFamily?: string;
  letterSpacing?: string;
};

export type { TText };
