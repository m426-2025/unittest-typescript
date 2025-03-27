import { mean } from "./average";

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});
test('test mean of no numbers', () => {
  const numbers: number[] = [];
  expect(() => mean(numbers)).toThrow('Cannot calculate mean of an empty array');
});
