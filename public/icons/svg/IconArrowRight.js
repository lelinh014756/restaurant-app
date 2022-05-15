import React from "react";

const IconArrowRight = ({ width, height }) => {
  return (
    <>
      <svg
        width={width ? width : '24'}
        height={height ? height : '24'}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.91003 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91003 4.08"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default IconArrowRight;
