import { mean } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [3, 7];
  const expected: number = 5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [3, 7, 10, 11, 14];
  const expected: number = 9;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];

  // Act
  function meanOfNone() {
    mean(numbers);
  } 

  // Assert
  expect(meanOfNone).toThrow("Error Syntax");
});
