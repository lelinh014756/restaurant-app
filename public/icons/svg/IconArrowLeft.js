import React from "react";

const IconArrowLeft = ({ width, height }) => {
  return (
    <>
      <svg
        width={width ? width :"24"}
        height={height ? height : "24"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 19.92L8.47997 13.4C7.70997 12.63 7.70997 11.37 8.47997 10.6L15 4.08"
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

export default IconArrowLeft;
