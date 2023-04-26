import React from "react";
import { arrayOf, func, exact, string } from "prop-types";
import { Table } from "../components";
import { Wrapper } from "../styles/styles";
import { DescriptionSpan } from "../styles/mainwrap/prizeList";

const PrizeList = ({ prizeList, description, handleRefreshClick }) => (
  <Wrapper>
    <Table handleRefreshClick={handleRefreshClick} prizeList={prizeList} />
    <DescriptionSpan>
      <span>{description}</span>
    </DescriptionSpan>
  </Wrapper>
);

PrizeList.propTypes = {
  prizeList: arrayOf(exact({ title: string, total: string })),
  description: string,
  handleRefreshClick: func,
};

PrizeList.defaultProps = {
  prizeList: [],
  description: "",
  handleRefreshClick: (r) => r,
};

export default PrizeList;
