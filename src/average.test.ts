import { mean, median, mode, standardDeviation } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [4, 5];
  const expected: number = 4.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test('mean of five numbers', () => {
  const numbers = [1, 2, 3, 4, 5];
  const expected = 3;

  const result = mean(numbers);

  expect(result).toBe(expected);
});

test('mean of no numbers throws error', () => {
  expect(() => mean([])).toThrow('Cannot calculate mean of empty list');
});

test('median for odd number of elements', () => {
  const numbers = [1, 2, 6, 7, 8];
  expect(median(numbers)).toBe(6);
});

test('median for even number of elements', () => {
  const numbers = [1, 2, 5, 6, 7, 8];
  expect(median(numbers)).toBe(5.5);
});

test('median for no elements throws error', () => {
  expect(() => median([])).toThrow('Cannot calculate median of empty list');
});

test('mode returns most frequent number(s)', () => {
  expect(mode([1, 1, 2, 2, 3])).toEqual([1, 2]);
});


test('standard deviation of [1,3] is 1', () => {
  expect(standardDeviation([1, 3])).toBeCloseTo(1);
});
