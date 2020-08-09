import React from "react";
import Info from "../info";

export default {
  title: "Organisms",
};

const data = {
  title: "Play'n GO Tournament",
  endDate: "2020-08-15T10:06:29.578Z",
  startDate: "2020-08-13T10:06:29.578Z",
  prizePool: "£25,000.00",
  backgroundImage: "https://i.imgur.com/W4WBNV2.jpg",
  players: 250,
};

export const info = () => <Info {...data} />;
