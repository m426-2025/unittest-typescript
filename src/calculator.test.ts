import { add, subtract, multiply, divide } from "./calculator";

test("add three to two is five", () => {
  const a: number = 2;
  const b: number = 3;
  const expected: number = 5;
  const actual = add(a, b);
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;
  const actual = subtract(a, b);
  expect(actual).toBe(expected);
});

test("multiply three with four is twelve", () => {
  const a: number = 3;
  const b: number = 4;
  const expected: number = 12;
  const actual = multiply(a, b);
  expect(actual).toBe(expected);
});

test("divide eight by two is four", () => {
  const a: number = 8;
  const b: number = 2;
  const expected: number = 4;
  const actual = divide(a, b);
  expect(actual).toBe(expected);
});

test("divide by zero throws error", () => {
  expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
});
