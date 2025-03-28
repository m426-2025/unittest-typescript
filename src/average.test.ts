import { mean } from "./average";

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
