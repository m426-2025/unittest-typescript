import { mean, median } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [1, 10];
  const expected: number = 5.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [2, 4, 6, 8, 10];
  const expected: number = 6;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];

  // Assert & Act
  expect(() => mean(numbers)).toThrow("Liste darf nicht leer sein");
});

test("median for odd number of elements", () => {
  const numbers = [1, 2, 6, 7, 8];
  const expected = 6;
  const actual = median(numbers);
  expect(actual).toBe(expected);
});

test("median for even number of elements", () => {
  const numbers = [1, 2, 5, 6, 7, 8];
  const expected = 5.5;
  const actual = median(numbers);
  expect(actual).toBe(expected);
});

test("median for no elements", () => {
  expect(() => median([])).toThrow("Leere Liste – Median nicht definiert");
});