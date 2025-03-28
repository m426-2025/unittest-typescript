import { mean, median, mode, standardDeviation } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [1, 10];
  const expected: number = 5.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [2, 4, 6, 8, 10];
  const expected: number = 6;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];

  // Assert & Act
  expect(() => mean(numbers)).toThrow("Liste darf nicht leer sein");
});

test("median for odd number of elements", () => {
  const numbers = [6, 1, 10, 2, 8, 7, 9];
  const expected = 7;
  const actual = median(numbers);
  expect(actual).toBe(expected);
});

test("median for even number of elements", () => {
  const numbers = [10, 6, 2, 5, 7, 8, 9, 1];
  const expected = 6.5;
  const actual = median(numbers);
  expect(actual).toBe(expected);
});

test("median for no elements", () => {
  expect(() => median([])).toThrow("Leere Liste - Median nicht definiert");
});

test("mode of [1]", () => {
  expect(mode([1])).toEqual([1]);
});

test("mode of [1, 1]", () => {
  expect(mode([1, 1])).toEqual([1]);
});

test("mode of [1, 1, 2]", () => {
  expect(mode([1, 1, 2])).toEqual([1]);
});

test("mode of [1, 1, 2, 2]", () => {
  expect(mode([1, 1, 2, 2])).toEqual([1, 2]);
});

test("mode of [1, 1, 2, 2, 3]", () => {
  expect(mode([1, 1, 2, 2, 3])).toEqual([1, 2]);
});

test("mode of [1, 1, 2, 2, 3, 3]", () => {
  expect(mode([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
});

test("mode of [1, 1, 2, 2, 3, 3, 3]", () => {
  expect(mode([1, 1, 2, 2, 3, 3, 3])).toEqual([3]);
});

test("standard deviation of empty array throws error", () => {
  expect(() => standardDeviation([])).toThrow("Leere Liste - Standardabweichung nicht definiert");
});

test("standard deviation of single value [5] is 0", () => {
  expect(standardDeviation([5])).toBe(0);
});

test("standard deviation of [1, 3] is 1", () => {
  expect(standardDeviation([1, 3])).toBe(1);
});

test("standard deviation of [1, 5] is 2", () => {
  expect(standardDeviation([1, 5])).toBe(2);
});

test("standard deviation of [1, 2, 3, 4, 5] is approx. 1.41", () => {
  const result = standardDeviation([1, 2, 3, 4, 5]);
  expect(result).toBeGreaterThan(1.41);
  expect(result).toBeLessThan(1.42);
});