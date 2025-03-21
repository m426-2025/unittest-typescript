import { add, subtract, multiply, division } from "./calculator";

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
  const a: number = 5;
  const b: number = 4;
  const expected: number = 1;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply 3 times 4 is 12", () => {
const a: number = 3;
const b: number = 4;
const expected: number = 12;


const actual: number = multiply(a,b);

expect(actual).toBe(expected);

})

test("divide 5 from 2 is 2.5", () => {
  const a: number = 5;
  const b: number = 2;
  const expected: number = 2.5;

  const actual: number = division(a,b);

  expect(actual).toBe(expected);

})


test("divide 0 from 5 is infinet", () => {
  const a: number = 5;
  const b: number = 0;
  expect(() => division(a, b)).toThrow("Division durch 0 nicht erlaubt");

})
