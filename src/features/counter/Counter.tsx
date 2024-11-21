'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';

import { increment, decrement, incrementByAmount } from '@/features/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col p-12">
      <h1 className="text-red">Counter: {count}</h1>
      <div className="flex flex-row items-center gap-6">
        <button
          className="rounded-primary-radius bg-primary p-2 text-accent"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="rounded-primary-radius bg-secondary p-2 text-accent"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="rounded-primary-radius bg-primary p-2 text-accent"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
