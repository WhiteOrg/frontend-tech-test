import React from "react"

import "./IconButton.css";

const IconButton = ({className, icon, onClick}) => {
  return (
    <div className={`icon-button ${className}`} onClick={onClick}>
      <img src={icon}/>
    </div>
  )
}

export default React.memo(IconButton);