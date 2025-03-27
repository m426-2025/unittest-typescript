import { mean } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [1, 4];
  const expected: number = 2.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [2, 4, 6, 8, 10]; // Fünf Zahlen
  const expected: number = 6; // Arithmetisches Mittel

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("mean of no numbers throws an error", () => {
  // Arrange
  const numbers: number[] = []; // Leere Liste

  // Act & Assert
  expect(() => mean(numbers)).toThrowError("Liste darf nicht leer sein");
});