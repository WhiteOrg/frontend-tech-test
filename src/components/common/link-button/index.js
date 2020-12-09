import React from "react";
import PropTypes from "prop-types";

const LinkButton = ({
  title,
  href,
  clickHandler,
  boxModel = true,
  children,
}) => {
  const classes = boxModel ? "mx-2 my-4" : "";
  return (
    <a
      href={href}
      title={title}
      className={`text-gray-700 hover:text-gray-800 h-10 w-10 cursor-pointer ${classes}`}
      onClick={clickHandler}
    >
      {children}
    </a>
  );
};

LinkButton.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  clickHandler: PropTypes.func,
  boxModel: PropTypes.bool,
  children: PropTypes.object,
};

export default LinkButton;
