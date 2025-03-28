import { mean, median } from "./average";

test("test median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 2, 6, 7, 8];
  const expected: number = 6;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 2, 5, 6, 7, 8];
  const expected: number = (5 + 6) / 2;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for no elements", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => median(numbers)).toThrow("Cannot calculate median of an empty list");
});

test("test median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [8, 1, 7, 6, 2, 10, 12]; 
  const expected: number = 7; 

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 2, 5, 6, 7, 8, 9, 10];
  const expected: number = (6 + 7) / 2; 

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});