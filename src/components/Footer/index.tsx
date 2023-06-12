import React from "react";
import "./footer.scss";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";

const Footer = () => {
  return (
    <div className="footer">
      <p>Share this tournament</p>
      <div className="footer__icons">
        <button>
          <img src={twitter} alt="twitter logo" />
        </button>
        <button>
          <img src={facebook} alt="facebook logo" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
