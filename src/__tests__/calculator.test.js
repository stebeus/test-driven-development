import { expect, test } from 'vitest';
import { add, subtract, multiply, divide } from '../components/calculator';

test('Sums two addends correctly', () => {
  expect(add(1 + 2)).toBe(3);
});

test('Subtracts two operands correctly', () => {
  expect(subtract(4 - 5)).toBe(-1);
});

test('Multiplies two factors', () => {
  expect(multiply(6 * 7)).toBe(42);
});

test('Divides two operands', () => {
  expect(divide(10 / 5)).toBe(2);
});
