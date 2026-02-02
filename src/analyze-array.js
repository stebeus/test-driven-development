import { mean } from './calculator';

export function analyzeArray(array) {
  return {
    average: mean(array),
    minimum: Math.min(array),
    maximum: Math.max(array),
    length: array.length,
  };
}
