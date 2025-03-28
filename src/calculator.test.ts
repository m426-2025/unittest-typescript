import { add, division, multiply, subtract } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 1;
  const b: number = 3;
  const expected: number = 4;

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

test("multiply three times 4 is twelve", () => {
// Arrange
const a: number = 3;
const b: number = 4;
const expected: number = 12;

// Act
const actual: number = multiply(a, b);

// Assert
expect(actual).toBe(expected);
})

test("divide fifty-six by seven is eight", () => {
  // Arrange
  const a: number = 56;
  const b: number = 7;
  const expected: number = 8;
  
  // Act
  const actual: number = division(a, b);
  
  // Assert
  expect(actual).toBe(expected);
})

test("divide fifty-six by zero is eight", () => {
  // Arrange
  const a: number = 56;
  const b: number = 0;
  const expected: number = Infinity;
  
  // Act
  const actual: number = division(a, b);
  
  // Assert
  expect(actual).toBe(expected);
})