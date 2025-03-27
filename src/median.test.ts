import { median } from "./median";

test('median for odd number of elements', () => {
  const numbers: number[] = [1, 2, 6, 7, 8];
  const expected: number = 6;

  const actual = median(numbers);

  expect(actual).toBe(expected);
});

test('median for even number of elements', () => {
  const numbers: number[] = [1, 2, 5, 6, 7, 8];
  const expected: number = 5.5;

  const actual = median(numbers);

  expect(actual).toBe(expected);
});

test('median for no elements', () => {
  const numbers: number[] = [];
  expect(() => median(numbers)).toThrow('Cannot calculate median of an empty array');
});
