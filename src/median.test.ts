import { median } from "./median";

test("test median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3];
  const expected: number = 2;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [4, 2, 1, 3];
  const expected: number = 2.5;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for no elements", () => {
  // Arrange
  const numbers: number[] = [];
  const expected: number = NaN;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});
