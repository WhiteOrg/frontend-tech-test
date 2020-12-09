import React from "react";
import PropTypes from "prop-types";

import { NormalizeText } from "../../helpers";

const GamesList = ({ content }) => {
  return (
    <section className="container mx-auto p-8">
      <h2 className="font-barlow mb-6 font-bold text-blue-900 text-3xl">
        Include Games
      </h2>
      <ul className="grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-4">
        {content.map((listItem) => {
          return (
            <li key={NormalizeText(listItem.title)}>
              <img src={listItem.src} alt={listItem.title}></img>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

GamesList.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    src: PropTypes.string,
  }),
};

export default GamesList;
