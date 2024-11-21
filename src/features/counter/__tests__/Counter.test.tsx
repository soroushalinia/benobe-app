import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Counter from '@/features/counter/Counter';
import { describe, expect, it } from 'vitest';
import { createMockCounterStore } from '@/tests/mock/mockCounterStore';

describe('Counter component', () => {
  it('should render the counter value and dispatch actions correctly', () => {
    const store = createMockCounterStore();

    render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    expect(screen.getByText(/Counter:/).textContent).toBe('Counter: 0');

    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    expect(screen.getByText(/Counter:/).textContent).toBe('Counter: 1');

    fireEvent.click(screen.getByRole('button', { name: 'Decrement' }));
    expect(screen.getByText(/Counter:/).textContent).toBe('Counter: 0');

    fireEvent.click(screen.getByRole('button', { name: 'Increment by 5' }));
    expect(screen.getByText(/Counter:/).textContent).toBe('Counter: 5');
  });
});
