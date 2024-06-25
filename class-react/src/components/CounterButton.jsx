import React from "react";

const CounterButton = ({ step, type, decrese, increase }) => {
  return (
    <button
      type="button"
      className="bg-blue-800 text-white p-2"
      onClick={type === "minus" ? decrese : increase}
    >
      {type === "minus" ? `-${step}` : `+${step}`}
    </button>
  );
};

export default CounterButton;
