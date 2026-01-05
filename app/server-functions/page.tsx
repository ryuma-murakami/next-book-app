'use client';
import { useState, useTransition } from 'react';
import { incrementCount } from './actions';

const ServerFunctions = () => {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleClick = async () => {
    startTransition(async () => {
      const newCount = await incrementCount();
      setCount(newCount);
    });
  };

  return (
    <div>
      <button type="button" onClick={handleClick} disabled={isPending}>
        click!!
      </button>
      {isPending ? <p>incrementing...</p> : <p>Count: {count}</p>}
    </div>
  );
};

export default ServerFunctions;
