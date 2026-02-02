import { expect, test } from 'vitest';
import { analyzeArray } from '../analyze-array';

test('Returns an object with the average, maximum, minimum and array length properties', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    minimum: 1,
    maximum: 8,
    length: 6,
  });
});
