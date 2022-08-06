import React, { useState } from "react";
interface IProps {
  description: string;
  defaultCount: number;
}
const Counter = ({ description, defaultCount }: IProps) => {
  const [counter, setCounter] = useState(defaultCount);
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>
        {description} : {defaultCount}
      </h1>
      <div>
        <label htmlFor="text">
          Input Number:
          <input
            type="text"
            id="text"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value) || 0)}
          />
        </label>
      </div>
      <button
        aria-label="decrement"
        type="button"
        onClick={() => setCounter((prev) => prev - number)}
      >
        -
      </button>
      <span>Counter is {counter}</span>
      <button
        aria-label="increment"
        type="button"
        onClick={() => setCounter((prev) => prev + number)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
