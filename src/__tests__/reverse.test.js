import { expect, test } from 'vitest';
import { reverse } from '../reverse';

test('Reverses the string', () => {
  expect(reverse('John Doe')).toBe('eoD nhoJ');
});
