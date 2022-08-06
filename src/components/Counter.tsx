import React, { useState } from "react";
interface IProps {
  description: string;
  defaultCount: number;
}
const Counter = ({ description, defaultCount }: IProps) => {
  const [counter, setCounter] = useState(defaultCount);
  return (
    <div>
      <h1>
        {description} : {defaultCount}
      </h1>
      <button type="button" onClick={(e) => setCounter((prev) => prev - 1)}>
        -
      </button>
      <span>Counter is {counter}</span>
      <button
        type="button"
        onClick={(e) => setCounter((prev) => prev + 1)}
        data-testid="ok"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
