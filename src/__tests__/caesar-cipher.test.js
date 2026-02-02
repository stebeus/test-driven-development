import { expect, test } from 'vitest';
import { caesarCipher } from '../caesar-cipher';

test('Shifts alphabetic characters by one letter', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('Shifts lowercase alphabetic characters by three letters', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Shifts uppercase alphabetic characters by three letters', () => {
  expect(caesarCipher('XYZ', 3)).toBe('ABC');
});

test('Preserves the original capitalization and the non-alphabetic characters', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
