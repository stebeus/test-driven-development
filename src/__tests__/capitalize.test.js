import { expect, test } from 'vitest';
import { capitalize } from '../components/capitalize';

test('Capitalizes the first character of the string', () => {
  expect(capitalize('hello, world!').toBe('Hello, world!'));
});
