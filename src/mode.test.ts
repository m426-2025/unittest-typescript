import { mode } from "./mode";

test('mode of a single element array', () => {
  const numbers = [1];
  const expected = [1];

  const actual = mode(numbers);

  expect(actual).toEqual(expected);
});

test('mode of an array with multiple same elements', () => {
  const numbers = [1, 1, 2];
  const expected = [1];

  const actual = mode(numbers);

  expect(actual).toEqual(expected);
});

test('mode of an array with multiple different elements', () => {
  const numbers = [1, 1, 2, 2];
  const expected = [1, 2];

  const actual = mode(numbers);

  expect(actual).toEqual(expected);
});

test('mode of an array with all unique elements', () => {
  const numbers = [1, 2, 3];
  const expected = [1, 2, 3]; // All elements are equally frequent

  const actual = mode(numbers);

  expect(actual).toEqual(expected);
});
