import { add, multiply, subtract, divide} from "./calculator";

test("add three to three is six", () => {
  // Arrange
  const a: number = 3;
  const b: number = 3;
  const expected: number = 6;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract three from six is three", () => {
  // Arrange
  const a: number = 6;
  const b: number = 3;
  const expected: number = 3;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("mutliply 2 times 3 is six", () => {
  // Arrange
  const a: number = 2;
  const b: number = 3;
  const expected: number = 6;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide by zero throws an error", () => {
  // Arrange
  const dividend = 10;
  const divisor = 0;

  // Assert & Act
  expect(() => divide(dividend, divisor)).toThrow("Division durch 0 ist nicht erlaubt");
});