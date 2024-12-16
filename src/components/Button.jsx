/** @format */

import React from "react";

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-5 border font-montserrat text-lg leading-none
    ${backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red border-coral-red text-white"} rounded-full ${fullWidth && 'w-full'}`}
      >
      {label}

      {iconURL && (
        <img src={iconURL} className="ml-2 rounded-full w-5 h-5" alt="icons" />
      )}
    </button>
  );
};

export default Button;
