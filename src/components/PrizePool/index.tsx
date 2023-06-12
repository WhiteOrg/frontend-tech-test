import React from "react";
import "./prizePool.scss";

const PrizePool = (props: { prizePool: string }) => {
  const { prizePool } = props;
  return (
    <div className="prizePool">
      <p className="prizePool__heading">Prize pool</p>
      <p className="prizePool__prize">{prizePool}</p>
    </div>
  );
};

export default PrizePool;
