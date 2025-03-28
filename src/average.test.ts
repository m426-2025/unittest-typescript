import { mean, median, mode, standardDeviation } from "./average";

test("mean of two numbers", () => {
  // Arrange
  const numbers = [4, 8];
  const expected = 6;

  // Act
  const actual = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("mean of five numbers", () => {
  // Arrange
  const numbers = [2, 4, 6, 8, 10];
  const expected = 6;

  // Act
  const actual = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("mean of no numbers throws error", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => mean(numbers)).toThrow("Cannot calculate mean of an empty list.");
});

test("median for odd number of elements", () => {
  // Arrange
  const numbers = [1, 3, 5, 7, 9];
  const expected = 5;

  // Act
  const actual = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("median for even number of elements", () => {
  // Arrange
  const numbers = [1, 3, 5, 7, 9, 11];
  const expected = (5 + 7) / 2;

  // Act
  const actual = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("median for no elements throws error", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => median(numbers)).toThrow("Cannot calculate median of an empty list.");
});

test("mode of [1] is 1", () => {
  const numbers = [1];
  const expected = [1];
  const actual = mode(numbers);
  expect(actual).toEqual(expected);
});

test("mode of [1, 1] is 1", () => {
  const numbers = [1, 1];
  const expected = [1];
  const actual = mode(numbers);
  expect(actual).toEqual(expected);
});

test("mode of [1, 1, 2] is 1", () => {
  const numbers = [1, 1, 2];
  const expected = [1];
  const actual = mode(numbers);
  expect(actual).toEqual(expected);
});

test("mode of [1, 1, 2, 2] is [1, 2]", () => {
  const numbers = [1, 1, 2, 2];
  const expected = [1, 2];
  const actual = mode(numbers);
  expect(actual).toEqual(expected);
});

test("mode of [1, 1, 2, 2, 3] is [1, 2]", () => {
  const numbers = [1, 1, 2, 2, 3];
  const expected = [1, 2];
  const actual = mode(numbers);
  expect(actual).toEqual(expected);
});

test("mode of [1, 1, 2, 2, 3, 3, 3] is [3]", () => {
  const numbers = [1, 1, 2, 2, 3, 3, 3];
  const expected = [3];
  const actual = mode(numbers);
  expect(actual).toEqual(expected);
});

test("mode of [1, 1, 2, 2, 3, 3, 3, 3] is [3]", () => {
  const numbers = [1, 1, 2, 2, 3, 3, 3, 3];
  const expected = [3];
  const actual = mode(numbers);
  expect(actual).toEqual(expected);
});

test("standard deviation of empty list throws error", () => {
  const numbers: number[] = [];
  expect(() => standardDeviation(numbers)).toThrow("Cannot calculate standard deviation of an empty list.");
});

test("standard deviation of one value is 0", () => {
  const numbers = [5];
  const expected = 0;
  const actual = standardDeviation(numbers);
  expect(actual).toBeCloseTo(expected, 5);
});

test("standard deviation of [1, 3] is 1", () => {
  const numbers = [1, 3];
  const expected = 1;
  const actual = standardDeviation(numbers);
  expect(actual).toBeCloseTo(expected, 5);
});

test("standard deviation of [1, 5] is 2", () => {
  const numbers = [1, 5];
  const expected = 2;
  const actual = standardDeviation(numbers);
  expect(actual).toBeCloseTo(expected, 5);
});

test("standard deviation of [1, 2, 3, 4, 5] is approximately 1.414", () => {
  const numbers = [1, 2, 3, 4, 5];
  const expected = Math.sqrt((Math.pow(1 - 3, 2) + Math.pow(2 - 3, 2) + Math.pow(3 - 3, 2) + Math.pow(4 - 3, 2) + Math.pow(5 - 3, 2)) / 5);
  const actual = standardDeviation(numbers);
  expect(actual).toBeCloseTo(expected, 3);
});