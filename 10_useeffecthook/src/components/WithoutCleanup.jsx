import React, { useEffect, useState } from "react";

const WithoutCleanup = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="text-center">
      <p>Button clicked {count} times</p>
      <button
        className="bg-red-500 px-3 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        WthOut
      </button>
    </div>
  );
};

export default WithoutCleanup;
