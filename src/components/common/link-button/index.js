import React from "react";

const LinkButton = ({ title, href, clickHandler, boxModel = true, children }) => {
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

export default LinkButton;
