import {add, divide, multiply, subtract} from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 3;
  const b: number = 2;
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

test("multiply 5 with 6 should equal in 30", () => {
  // Arrange
  const a = 5;
  const b = 6;
  const expected = 30;

  // Act
  const actual = multiply(a, b)

  // Assert
  expect(actual).toBe(expected)
})

test("divide 21 by 3 should equal in 7 & division by zero should throw an Error", () => {
  // Arrange
  const a = 21;
  const b = 3;
  const expected = 7;

  // Act
  const actual = divide(a, b)

  // Assert
  expect(actual).toBe(expected)

  expect(() => divide(a, 0)).toThrow("Division By Zero")
})