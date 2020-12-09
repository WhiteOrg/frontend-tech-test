import React from "react";

const LinkButton = ({ title, href, children }) => {
  return (
    <a
      href={href}
      title={title}
      className="text-gray-700 hover:text-gray-800 mx-2 my-4 h-10 w-10"
    >
      {children}
    </a>
  );
};

export default LinkButton;
