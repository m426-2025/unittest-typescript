import { mean } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [3, 8];
  const expected: number = 5.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});
