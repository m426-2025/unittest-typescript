import { mean, median } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [3, 7];
  const expected: number = 5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [3,7,2,8,4,6];
  const expected: number = 5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];
  // Act

  // Assert
  expect(() => {
      mean(numbers);
    }).toThrow(new Error("Liste hat keine Elemente"));
});

test("test median of no numbers", () => {
  // Arrange
  const numbers: number[] = [];
  // Act

  // Assert
  expect(() => {
      median(numbers);
    }).toThrow(new Error("Liste hat keine Elemente"));
});

test("test median of odd number of elements", () => {
  // Arrange
  const numbers: number[] = [3, 7, 6, 3, 5];
  const expected: number = 5;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median of even number of elements", () => {
  // Arrange
  const numbers: number[] = [3, 6, 7, 4];
  const expected: number = 5;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});