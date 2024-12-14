/** @format */

import React from "react";


const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-5 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
      {label}

      <img src={iconURL} className="ml-2 rounded-full w-5 h-5" alt="icons" />
    </button>
  );
};

export default Button;
