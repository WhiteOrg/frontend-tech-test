import React from "react";
import PropTypes from "prop-types";

import { Stats, CountDown } from "../common";
import { NormalizeDate } from "../../helpers";

import userIcon from "../../images/user.svg";
import closeIcon from "../../images/close.svg";
import calenderIcon from "../../images/calendar.svg";

const Hero = ({ content }) => {
  const handleJoinBtnClick = (e) => {
    e.preventDefault();
    alert(
      "You've clicked the `Join` button.\n\nThat's Great! But it doesn't do anything as of now."
    );
  };

  const { title, startDate, prizePool, players, backgroundImage } = {
    ...content,
  };

  return (
    <section
      className="container mx-auto p-8 bg-cover bg-teal-900"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mb-16">
        <div className="flex justify-between">
          <h2 className="font-barlow mb-6 font-bold text-white text-5xl mb-12">
            {title}
          </h2>
          <img
            src={closeIcon}
            alt="Close Icon"
            className="h-8 md:h-12 w-8 md:w-12 my-3"
          />
        </div>
        <div className="flex">
          <h3 className="font-barlow mb-6 font-bold text-white text-2xl mr-4">
            Ends
          </h3>
          <CountDown></CountDown>
        </div>
      </div>
      <div className="flex mb-12">
        <Stats title="Prize Pool" value={prizePool} />
        <Stats title="Player" value={players}>
          <img src={userIcon} alt="Player" className="h-6 w-6 mr-2" />
        </Stats>
      </div>
      <div className="items-center flex mb-12">
        <img src={calenderIcon} alt="Start Date" className="h-6 w-6 mr-4" />
        <p className="font-barlow text-xl leading-6 text-white">
          Starts on {NormalizeDate(startDate)}
        </p>
      </div>
      <div className="flex md:mb-6">
        <button
          className="bg-yellow-300 text-black font-barlow font-bold text-2xl w-full md:w-1/2 py-2 text-uppercase"
          onClick={handleJoinBtnClick}
        >
          Join
        </button>
      </div>
    </section>
  );
};

Hero.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.string,
    prizePool: PropTypes.string,
    players: PropTypes.number,
    backgroundImage: PropTypes.string,
  })
};

export default Hero;
