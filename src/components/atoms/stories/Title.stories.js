import React from "react";
import { TitleH1, TitleH2 } from "../title";

export default {
  title: "Atoms",
};

export const titles = () => (
  <div>
    <TitleH1>H1</TitleH1>
    <TitleH2 textColor="#091870">H2</TitleH2>
  </div>
);
