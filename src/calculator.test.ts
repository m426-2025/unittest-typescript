import { add, multiply, subtract, divide } from "./calculator";

test("add three to two is five", () => {
  const a: number = 5;
  const b: number = 3;
  const expected: number = 8;
  const actual = add(a, b);
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;
  const actual: number = subtract(a, b);
  expect(actual).toBe(expected);
});

test("multiply", () => {
  const a: number = 2;
  const b: number = 10;
  const expected: number = 20;
  const actual: number = multiply(a, b);
  expect(actual).toBe(expected);
});

test("divide", () => {
  const a: number = 20;
  const b: number = 10;
  const expected: number = 2;
  const actual: number = divide(a, b);
  expect(actual).toBe(expected);
});

test("divide by zero throws error", () => {
  expect(() => divide(5, 0)).toThrow("Division durch 0 ist nicht erlaubt");
});
