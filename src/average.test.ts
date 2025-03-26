import { mean, median } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [3, 8];
  const expected: number = 5.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [3, 8, 4, 1, 14];
  const expected: number = 6;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];
  const expected: Error = Error("No numbers in the array");

  // Act
  const actual = () => mean(numbers);

  // Assert
  expect(actual).toThrow(expected);
});

test("test median for odd number of elements", () => {
  //Arrange
  const numbers: number[] = [3, 8, 4, 1, 14, 71, 11]
  const expected: number = 8;

  //Act
  const actual: number = median(numbers)

  //Assert
  expect(actual).toBe(expected)
});

test("test median for even number of elements", () => {
  //Arrange
  const numbers: number[] = [3, 8, 4, 1, 14, 31, 12, 45]
  const expected: number = 10;

  //Act
  const actual: number = median(numbers)

  //Assert
  expect(actual).toBe(expected)
});

test("test median of no numbers", () => {
  // Arrange
  const numbers: number[] = [];
  const expected: Error = Error("No numbers in the array");

  // Act
  const actual = () => median(numbers);

  // Assert
  expect(actual).toThrow(expected);
});