import React from "react";

import { LinkButton } from "./index";

import facebookLogo from "../../images/facebook.svg";
import twitterLogo from "../../images/twitter.svg";

const Footer = () => {
  const twitterUrl = `#`;
  const facebookUrl = `#`;
  return (
    <footer className="bg-gradient-to-tr bg-no-repeat from-purple-600 via-indigo-400 via-indigo-700 to-blue-600">
      <div className="container mx-auto p-4">
        <p className="flex justify-center font-barlow text-yellow-300 text-xl m-0 p-0">
          Share This Tournament
        </p>
        <div className="flex justify-center">
          <LinkButton title="Twitter Url" href={twitterUrl}>
            <img src={twitterLogo} alt="twitter" className="h-10 w-10"></img>
          </LinkButton>
          <LinkButton title="Facebook Url" href={facebookUrl}>
            <img src={facebookLogo} alt="Facebook" className="h-10 w-10"></img>
          </LinkButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
