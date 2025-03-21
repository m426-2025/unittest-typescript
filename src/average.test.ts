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
  const numbers: number[] = [];


  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toThrow(Error);
});

