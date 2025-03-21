import { add, subtract, multiply, divide } from "./calculator";

test("add three to five is eight", () => {
  // Arrange
  const a: number = 5;
  const b: number = 3;
  const expected: number = 8;

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

test("multiply four by three is twelve", () => {
  // Arrange
  const a: number = 3;
  const b: number = 4;
  const expected: number = 12;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide 6 by 4 is oneandahalf", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 1.5;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide 10 by 0 throws Error", () => {
  // Arrange
  const a: number = 10;
  const b: number = 0;

  // Act

  // Assert
  expect(() => {
    divide(a,b);
  }).toThrow(new Error("Cannot divide by 0"));
});