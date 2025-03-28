import { mean } from "./average";
import { median } from "./average";

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
