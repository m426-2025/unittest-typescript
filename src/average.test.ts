import { mean } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [4, 5];
  const expected: number = 4.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test('mean of five numbers', () => {
  const numbers = [1, 2, 3, 4, 5];
  const expected = 3;

  const result = mean(numbers);

  expect(result).toBe(expected);
});

test('mean of no numbers throws error', () => {
  expect(() => mean([])).toThrow('Cannot calculate mean of empty list');
});
