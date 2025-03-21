import { mean } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [3, 6];
  const expected: number = 4.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [1, 3, 5, 7, 9];
  const expected: number = 5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];
  const expected: number = 0;

  // Act
  const act = () => mean(numbers);

  // Assert
  expect(act).toThrowError("List cant be processed");
});