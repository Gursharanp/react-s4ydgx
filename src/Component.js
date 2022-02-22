import React, { useState, useEffect } from 'react';

export default function Component() {
  const [count, setCount] = useState(0);
  // Run Every time when render
  useEffect(() => {
    console.log('render every time');
  });

  //Run only one time when Component is mount
  useEffect(() => {
    setTimeout(() => {
      alert('Hello i am alart');
    }, 4000);
  }, []);

  //Run only when dependacies is changed
  useEffect(() => {
    console.log('render when depandacy array is changed');
  }, [count]);

  //Run on Component is unmount
  useEffect(() => {
    return () => {
      console.log('unmount');
    };
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
