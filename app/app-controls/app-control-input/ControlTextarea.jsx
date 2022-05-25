import React from "react";

const ControlTextarea = ({
  name,
  placeholder,
  className,
  id,
  onChange,
  row,
  cols,
}) => {
  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder ? placeholder : ""}
      cols={cols ? cols : "30"}
      rows={row ? row : "10"}
      type="text"
      onChange={onChange}
      className={"input textarea" + (className ? className : "")}
    />
  );
};

export default ControlTextarea;
