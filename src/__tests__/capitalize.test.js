import { expect, test } from 'vitest';
import { capitalize } from '../capitalize';

test('Capitalizes the first character of the string', () => {
  expect(capitalize('hello, world!')).toBe('Hello, world!');
});
