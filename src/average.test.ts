import { mean } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [5, 8];
  const expected: number = 6.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [5, 8, 1, 4, 6];
  const expected: number = 4.8;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];


  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toThrow(Error)
});

test("test median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [3, 8, 10];
  const expected: number = 6.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [5, 8, 3, 15];
  const expected: number = 6.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for no elements", () => {
  // Arrange
  const numbers: number[] = [];

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toThrow(Error);
});