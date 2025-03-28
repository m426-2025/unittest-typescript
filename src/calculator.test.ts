import { mean, median } from "./average";
import { add, divide, multiply, subtract } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 2;
  const b: number = 4;
  const expected: number = 6;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply three by two is six", () => {
  // Arrange
  const a: number = 3;
  const b: number = 2;
  const expected: number = 6;

  // Act
  const actual = multiply(a, b); 

  // Assert
  expect(actual).toBe(expected);
});

test("divide six by two is three", () => {
  // Arrange
  const a: number = 6;
  const b: number = 2;
  const expected: number = 3;

  // Act
  const actual = divide(a, b); 

// Assert
  expect(actual).toBe(expected);
});

test("divide by zero throws error", () => {
  const a: number = 6;
  const b: number = 0;
  expect(() => divide(a, b)).toThrowError("Division by zero is not allowed");
});

test("test mean of five numbers", () => {
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;
  const actual: number = mean(numbers);
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  const numbers: number[] = [];
  expect(() => mean(numbers)).toThrowError("Cannot calculate mean of an empty list");
});

test("test median for odd number of elements", () => {
  const numbers: number[] = [1, 3, 2];
  const expected: number = 2;
  const actual: number = median(numbers);
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
  const numbers: number[] = [1, 2, 3, 4];
  const expected: number = 2.5;
  const actual: number = median(numbers);
  expect(actual).toBe(expected);
});

test("test median for no elements", () => {
  const numbers: number[] = [];
  expect(() => median(numbers)).toThrowError("Cannot calculate median of an empty list");
});