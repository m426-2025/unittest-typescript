import { mean, median } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [1, 4];
  const expected: number = 2.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];

  // Act

  // Assert
  expect(() => {
    mean(numbers);
  }).toThrow();
});

test("test median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [6, 2, 4, 3, 1];
  const expected: number = 3;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [7, 1, 3, 4, 6, 2];
  const expected: number = 3.5;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});