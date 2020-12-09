import React from "react";
import PropTypes from "prop-types";

const Stats = ({ title, value, children }) => {
  return (
    <div className="font-barlow mr-6">
      <div className="mb-4">
        <p className="text-2xl leading-6 text-teal-400">{title}</p>
      </div>
      <div className="flex">
        {children}
        <p className="text-3xl leading-6 text-white font-bold">{value}</p>
      </div>
    </div>
  );
};

Stats.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.object,
};

export default Stats;
