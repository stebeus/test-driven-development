import { expect, test } from 'vitest';
import { caesarCypher } from '../caesarCypher';

test('Shifts alphabetic characters by one letter', () => {
  expect(caesarCypher('abc', 1)).toBe('bcd');
});

test('Shifts alphabetic characters by three letters', () => {
  expect(caesarCypher('xyz', 3)).toBe('abc');
});
