import { add, divide, multiply, subtract } from "./calculator";

test("add five to three is eight", () => {
  // Arrange
  const a: number = 5;
  const b: number = 3;
  const expected: number = 8;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract two from six is four", () => {
  // Arrange
  const a: number = 6;
  const b: number = 2;
  const expected: number = 4;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply six by three", () => {
  // Arrange
  const a: number = 6;
  const b: number = 3;
  const expected: number = 18;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide six by three", () => {
  // Arrange
  const a: number = 30;
  const b: number = 3;
  const expected: number = 10;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide six by zero", () => {
  // Arrange
  const a: number = 30;
  const b: number = 0;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toThrow(Error);
});


