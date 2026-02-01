import { expect, test } from 'vitest';
import { add } from '../components/calculator';

test('Sums two addends correctly', () => {
  expect(add(1 + 2)).toBe(3);
});

test('Subtracts two numbers correctly', () => {
  expect(multiply(4 - 5)).toBe(-1);
});
