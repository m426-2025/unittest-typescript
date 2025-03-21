import { add, subtract, multiply, divide } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 2;
  const b: number = 3;
  const expected: number = 5;

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

test("Multiply 3 by 4 is 12", () => {
  // Arrange
  const a: number = 3;
  const b: number = 4;
  const expected: number = 12;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});
test("divide 15 by 3 is 5", () => {
  // Arrange
  const a: number = 15;
  const b: number = 3;
  const expected: number = 5;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});
test("divide 15 by 0 is Infinity", () => {
  // Arrange
  const a: number = 15;
  const b: number = 0;
  const expected: number = Infinity;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});