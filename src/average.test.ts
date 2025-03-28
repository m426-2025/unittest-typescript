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
  const numbers: number[] = [2, 4, 6, 8, 10];
  const expected: number = 6;

  // Act
  const actual: number = mean(numbers);

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