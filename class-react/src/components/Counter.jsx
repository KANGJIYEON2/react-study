import React, { useEffect, useState } from "react";
import CounterButton from "./CounterButton";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(10);
  const increase = () => {
    setCount(count + step);
  };
  const decrese = () => {
    setCount(count - step);
  };

  useEffect(() => {
    console.log("숫자세기", count);
  }, [count]);

  return (
    <div>
      <h2>Counter</h2>
      <div className="m-3">{count}</div>
      <div className="flex gap-1 justify-center m-3">
        {/* <button
          type="button"
          className="bg-blue-800 text-white p-2"
          onClick={increase}
        >
          +1
        </button>
        <button
          type="button"
          className="bg-red-800 text-white p-2"
          onClick={decrese}
        >
          -1
        </button> */}
        <CounterButton step={step} type={"minus"} decrese={decrese} />
        <CounterButton step={step} type={"plus"} increase={increase} />
      </div>
    </div>
  );
};

export default Counter;
