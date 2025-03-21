import { mean } from "./average";

test("mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [2, 8];
  const expected: number = 5;

  // Act
  const actual = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;

  // Act
  const actual = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("mean of no numbers should throw an error", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => mean(numbers)).toThrow("Liste darf nicht leer sein");
});