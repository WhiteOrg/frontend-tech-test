type TTheme = {
  colors: Record<string, string>;
  fontSize: Record<string, string>;
  lineHeight: Record<string, string>;
};

type TFontSize =
  | "huge"
  | "smallerHuge"
  | "big"
  | "large"
  | "biggerMedium"
  | "medium"
  | "regular"
  | "small"
  | "tiny";

export type { TTheme, TFontSize };
