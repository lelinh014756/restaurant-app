import React from "react";

const ControlButton = ({ children, onClick, className, width, type }) => {
  return (
    <button
      type={type}
      style={{ width: width }}
      className={"btn " + (className ? className : "")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ControlButton;
