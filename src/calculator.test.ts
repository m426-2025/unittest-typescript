import {add, divide, multiply, subtract} from "./calculator";

test('add two numbers', () => {
  const a = 2;
  const b = 3;
  const expected = 5;
  expect(add(a, b)).toBe(expected);
});

test('subtract two numbers', () => {
  const a = 5;
  const b = 3;
  const expected = 2;
  expect(subtract(a, b)).toBe(expected);
});

test('multiply two numbers', () => {
  const a = 4;
  const b = 3;
  const expected = 12;
  expect(multiply(a, b)).toBe(expected);
});

test('divide two numbers', () => {
  const a = 10;
  const b = 2;
  const expected = 5;
  expect(divide(a, b)).toBe(expected);
});

test('division by zero throws error', () => {
  expect(() => divide(5, 0)).toThrow("Division durch 0 ist nicht erlaubt.");
});
