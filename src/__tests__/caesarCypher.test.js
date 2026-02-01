import { expect, test } from 'vitest';
import { caesarCypher } from '../caesarCypher';

test('Shifts all characters by one letter', () => {
  expect(caesarCypher('abc', 1)).toBe('bcd');
});
