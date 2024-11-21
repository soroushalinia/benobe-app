import { describe, it, expect } from 'vitest';
import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
} from '@/features/counter/counterSlice';

describe('counter slice', () => {
  const initialState = { value: 0 };

  it('should return the initial state when passed an empty action', () => {
    expect(counterReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle increment', () => {
    const action = increment();
    const state = counterReducer(initialState, action);
    expect(state.value).toBe(1);
  });

  it('should handle decrement', () => {
    const action = decrement();
    const state = counterReducer(initialState, action);
    expect(state.value).toBe(-1);
  });

  it('should handle incrementByAmount', () => {
    const action = incrementByAmount(5);
    const state = counterReducer(initialState, action);
    expect(state.value).toBe(5);
  });

  it('should handle multiple actions', () => {
    let state = counterReducer(initialState, increment());
    state = counterReducer(state, incrementByAmount(5));
    state = counterReducer(state, decrement());
    expect(state.value).toBe(5);
  });
});
