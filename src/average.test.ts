import { mean, median } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [2, 4];
  const expected: number = 3;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});


test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [2, 4, 6, 10, 5];
  const expected: number = 5.4;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("mean of an empty list should throw an error", () => {
  expect(() => mean([])).toThrow("Liste darf nicht leer sein");
});

test("median odd", () => {
  // Arrange
  const numbers: number[] = [2, 4, 6, 10, 5];
  const expected: number = 6;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});


test("median even", () => {
  // Arrange
  const numbers: number[] = [2, 4, 6, 10, 5, 1 ];
  const expected: number = 5.5;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});