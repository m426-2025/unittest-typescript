import { mean, median } from "./average";

test("mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [2, 8];
  const expected: number = 5;

  // Act
  const actual = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;

  // Act
  const actual = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("mean of no numbers should throw an error", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => mean(numbers)).toThrow("Liste darf nicht leer sein");
});

test("median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [7, 1, 6, 8, 2];
  const expected: number = 6;

  // Act
  const actual = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 2, 5, 6, 7, 8];
  const expected: number = 5.5;

  // Act
  const actual = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("median for no elements should throw an error", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => median(numbers)).toThrow("Liste darf nicht leer sein");
});