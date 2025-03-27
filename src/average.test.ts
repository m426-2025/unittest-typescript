import {mean, median} from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [13, 6];
  const expected: number = 9.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [4, 6, 13, 1, 20];
  const expected: number = 8.8;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];

  // Act / Assert
  expect(() => mean(numbers)).toThrow();
});

test("test median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [4, 6, 13, 1, 20, 32, 21]; // sorted: [1, 4, 6, 13, 21, 32]
  const expected: number = 13;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [4, 6, 13, 2, 20, 18, 32, 21]; // sorted: [2, 4, 6, 13, 18, 20, 21, 32]
  const expected: number = 15.5;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for no elements", () => {
  // Arrange
  const numbers: number[] = [];

  // Act / Assert
  expect(() => median(numbers)).toThrow();
});

