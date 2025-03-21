import {mean, median} from "./average";

test('mean of two numbers', () => {
  const numbers = [2, 6];
  const expected = 4;
  expect(mean(numbers)).toBe(expected);
});

test('mean of five numbers', () => {
  const numbers = [1, 2, 3, 4, 5];
  const expected = 3;
  expect(mean(numbers)).toBe(expected);
});

test('mean of no numbers throws error', () => {
  expect(() => mean([])).toThrow("Liste darf nicht leer sein.");
});

test('median for odd number of elements', () => {
  const numbers = [8, 1, 2, 7, 6];
  const expected = 6;
  expect(median(numbers)).toBe(expected);
});

test('median for even number of elements', () => {
  const numbers = [1, 2, 5, 6, 7, 8];
  const expected = 5.5;
  expect(median(numbers)).toBe(expected);
});

test('median for no elements throws error', () => {
  expect(() => median([])).toThrow("Liste darf nicht leer sein.");
});
