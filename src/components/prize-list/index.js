import React from "react";
import PropTypes from "prop-types";

import { LinkButton } from "../common";

import refreshLogo from "../../images/refresh.svg";

const PrizeList = ({ content, refreshHandler}) => {
  return (
    <section className="container mx-auto p-8">
      <div className="flex justify-between my-6">
        <h2 className="font-barlow font-bold text-blue-900 text-3xl leading-none">
          Prize List
        </h2>
        <div className="flex">
          <LinkButton title="Refresh" boxModel={false} clickHandler={refreshHandler}>
            <img src={refreshLogo} alt="Refresh" className="h-10 w-10"></img>
          </LinkButton>
        </div>
      </div>
      <div className="h-72 overflow-y-scroll divide-y divide-gray-100 border-b-4 border-t-4 py-6 border-solid border-gray-100 border-opacity-100 scrollbar-thin scrollbar-track-gray-50 scrollbar-thumb-yellow-400">
        {content.map((listItem, index) => {
          return (
            <div
              className="py-2 font-bold font-barlow text-black-900 flex"
              key={index}
            >
              <div className="flex flex-initial ml-4 mr-4">{index + 1}</div>
              <div className="flex flex-1 justify-start">{listItem.title}</div>
              <div className="flex flex-initial justify-end mr-4">
                {listItem.total}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

PrizeList.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    listItem: PropTypes.string,
  }),
};


export default PrizeList;
