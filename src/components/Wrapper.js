import React from "react";
import { func, shape, string, arrayOf, exact } from "prop-types";
import { PrizeList, Games, TermsAndConditions } from ".";

const Wrapper = ({ data, handleRefreshClick }) => {
  const { prizeList, games, description } = data;
  return (
    <div>
      <PrizeList
        prizeList={prizeList}
        description={description}
        handleRefreshClick={handleRefreshClick}
      />
      <Games games={games} />
      <TermsAndConditions />
    </div>
  );
};

Wrapper.propTypes = {
  data: shape({
    description: string,
    prizeList: arrayOf(exact({ title: string, total: string })),
    games: arrayOf(exact({ title: string, src: string })),
  }),
  handleRefreshClick: func,
};

Wrapper.defaultProps = {
  data: {},
  handleRefreshClick: (r) => r,
};

export default Wrapper;
