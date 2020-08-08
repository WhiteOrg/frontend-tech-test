import React from "react";
import List from "../list";

export default {
  title: "Molecules",
};

const prizeList = [
  {
    title: "P.C",
    total: "£2,500.00",
  },
  {
    title: "J.S",
    total: "£1,250.00",
  },
  {
    title: "H.J",
    total: "£700.00",
  },
  {
    title: "J.V",
    total: "£300.00",
  },
  {
    title: "L.K",
    total: "£100.00",
  },
  {
    title: "H.D",
    total: "£50.00",
  },
  {
    title: "V.G",
    total: "£35.00",
  },
  {
    title: "D.C",
    total: "£20.00",
  },
  {
    title: "P.D",
    total: "£10.00",
  },
  {
    title: "L.M",
    total: "£5.00",
  },
];

export const list = () => (
  <div>
    <List prizeList={prizeList} />
  </div>
);
