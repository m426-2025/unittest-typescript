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

test("mean of [2, 4] is 3", () => {
  expect(mean([2, 4])).toBe(3);
});

test("mean of empty list throws", () => {
  expect(() => mean([])).toThrow("Cannot calculate mean of empty array");
});
