import {mean, median} from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [1, 3];
  const expected: number = 2;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];

  // Act Assert
  expect(() => mean(numbers)).toThrow("Empty Array");
});

test("test median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [-1231, 2, 3, 40, 123123];
  const expected: number = 3;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [-1231, 2, 4130, 123123];
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const expected: number = (sortedNumbers[1] + sortedNumbers[2]) / 2;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});


test("test median for no elements", () => {
  // Arrange
  const numbers: number[] = [];

  // Assert
  expect(() => median(numbers)).toThrow("No Elements");
});
