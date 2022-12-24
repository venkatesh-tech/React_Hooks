import React, { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0); //Thay are functions so call them

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count{count}</button>
    </div>
  );
};

export default HookCounter;
