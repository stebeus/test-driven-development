import { expect, test } from 'vitest';
import { caesarCypher } from '../caesarCypher';

test('Shifts alphabetic characters by one letter', () => {
  expect(caesarCypher('abc', 1)).toBe('bcd');
});

test('Shifts alphabetic characters by three letters', () => {
  expect(caesarCypher('xyz', 3)).toBe('abc');
});

test('Preserves the original capitalization and non-alphabetic characters', () => {
  expect(caesarCypher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
