import React from "react";
import PoolInfo from "../pool_info";
import user from "../../../images/user.svg";

export default {
  title: "Molecules",
};

export const pool_info = () => (
  <div>
    <PoolInfo title="prize pool" info="£25,000.00" />
    <PoolInfo title="player" info="359" icon={user} />
  </div>
);
