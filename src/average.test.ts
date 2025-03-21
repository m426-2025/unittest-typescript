import { mean } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [1, 3];
  const expected: number = 2;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("mean of five numbers", () => {
  // Arrange
  const numbers = [1, 2, 3, 4, 5];
  const expected = 3;

  // Act
  const actual = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("mean of no numbers throws an error", () => {
  // Arrange
  const numbers: number[] = [];
  const expectedMessage = "Cannot calculate mean of empty list";

  // Act
  const action = () => mean(numbers);

  // Assert
  expect(action).toThrowError(expectedMessage);
});