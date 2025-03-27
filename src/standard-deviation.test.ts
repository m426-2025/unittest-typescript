import { standardDeviation } from "./standard-deviation";

test('standard deviation of a single element array is 0', () => {
  const numbers: number[] = [5];
  const expected: number = 0;

  const actual = standardDeviation(numbers);

  expect(actual).toBe(expected);
});

test('standard deviation of two numbers', () => {
  const numbers: number[] = [1, 3];
  const expected: number = 1;

  const actual = standardDeviation(numbers);

  expect(actual).toBe(expected);
});

test('standard deviation of multiple numbers', () => {
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 1.4142135623730951;  // This is approximately sqrt(2)

  const actual = standardDeviation(numbers);

  expect(actual).toBeCloseTo(expected, 5); // Allowing a small margin of error
});

test('standard deviation of an empty array should throw an error', () => {
  const numbers: number[] = [];
  expect(() => standardDeviation(numbers)).toThrow('Cannot calculate standard deviation of an empty array');
});
