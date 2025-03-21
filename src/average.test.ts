import { mean } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [3, 4];
  const expected: number = 3.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});


test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [3, 4, 3, 6, 1];
  const expected: number = 3.4;

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
  expect(() => mean(numbers)).toThrow();
});

