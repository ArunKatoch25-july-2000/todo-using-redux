import React from "react";

const ToDo = ({ text }) => {
  return (
    <span className="text-base text-gray-600 lg:text-lg inline-block w-[80%]">
      • {text}
    </span>
  );
};

export default ToDo;
