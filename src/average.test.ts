import { mean, median, mode } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [1, 3];
  const expected: number = 2;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [1, 3, 5, 7, 9];
  const expected: number = 5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];
  const expected: number = 5;

  // Act
  const actual = () => mean(numbers);

  // Assert
  expect(actual).toThrow("empty array");
});

test("test median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 8, 5, 20, 35];
  const expected: number = 8;

  // Act
  const actual = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [5, 17, 12, 24];
  const expected: number = 14.5;

  // Act
  const actual = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for no elements", () => {
  // Arrange
  const numbers: number[] = [];
  const expected: number = 5;

  // Act
  const actual = () => median(numbers);

  // Assert
  expect(actual).toThrow("empty array");
});

test(`test mode for number 3`, () => {
  // Arrange
  const numbers: number[] = [1, 1, 2, 2, 3, 3, 3];
  const expected: number[] = [3];

  // Act
  const actual = mode(numbers);

  // Assert
  expect(actual.toString()).toBe(expected.toString());
});

test(`test mode for numbers 2, 4`, () => {
  // Arrange
  const numbers: number[] = [4, 2, 7, 8, 4, 6, 9, 5, 2];
  const expected: number[] = [2, 4];

  // Act
  const actual =  mode(numbers);

  // Assert
  expect(actual.toString()).toBe(expected.toString());
});

test(`test mode for numbers 2, 4, 5, 6, 9`, () => {
  // Arrange
  const numbers: number[] = [1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9, 9];
  const expected: number[] = [2, 4, 5, 6, 9];

  // Act
  const actual =  mode(numbers);

  // Assert
  expect(actual.toString()).toBe(expected.toString());
});

test("test mode for an empty array", () => {
  // Arrange
  const numbers: number[] = [];

  // Act
  const actual = () => mode(numbers);

  // Assert
  expect(actual).toThrow("empty array");
});