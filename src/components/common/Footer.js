import React from "react";

import facebookLogo from "../../images/facebook.svg";
import twitterLogo from "../../images/twitter.svg";

const Footer = () => {
  const twitterUrl = `#`;
  const facebookUrl = `#`;
  return (
    <footer className="bg-gradient-to-tr bg-no-repeat from-purple-600 via-indigo-400 via-indigo-700 to-blue-600">
      <div className="container mx-auto py-4">
        <p className="flex justify-center font-barlow text-yellow-300 text-lg m-0 p-0">
          Share This Tournament
        </p>
        <div className="flex justify-center">
          <a
            href={twitterUrl}
            title="Twitter URL"
            className="text-gray-700 hover:text-gray-800 mx-2 my-4 h-10 w-10"
          >
            <img src={twitterLogo} alt="twitter" className="h-10 w-10"></img>
          </a>
          <a
            href={facebookUrl}
            title="Facebook URL"
            className="text-gray-700 hover:text-gray-800 mx-2 my-4 h-10 w-10"
          >
            <img src={facebookLogo} alt="facebook" className="h-10 w-10"></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
