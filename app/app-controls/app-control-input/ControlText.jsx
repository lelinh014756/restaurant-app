import React from "react";

const ControlText = ({
  className,
  name,
  onChange,
  placeholder,
  type,
  value,
  width,
}) => {
  return (
    <input
      type={type ? type : "text"}
      className={"input " + (className ? className : "")}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default ControlText;
