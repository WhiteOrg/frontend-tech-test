const sizes = {
  tablet: "620px",
  laptop: "960px",
  desktop: "1200px",
};

export default {
  colors: {
    textWhite: "#FFF",
    textBlack: "#000",
    textAqua: "#20E2EA",
    yellow: "#F8C433",
    lightYellow: "#CCA32F",
    lightGray: "#4C747B",
    textBlue: "#0A1762",
    lightBlue: "#F3F2FD",
  },

  fonts: {
    primary: `"Barlow Condensed", sans-serif;`,
    secondary: `"Roboto", sans-serif`,
  },

  mediaQueries: {
    tablet: `screen and (min-width: ${sizes.tablet})`,
    laptop: `screen and (min-width: ${sizes.laptop})`,
    desktop: `screen and (min-width: ${sizes.desktop})`,
  },
};
