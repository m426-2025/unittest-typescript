import { median } from './median';

test('median for odd number of elements', () => {
  expect(median([1, 2, 6, 7, 8])).toBe(6);
});

test('median for even number of elements', () => {
  expect(median([1, 2, 5, 6, 7, 8])).toBe((5 + 6) / 2);
});

test('median for no elements', () => {
  expect(() => median([])).toThrow(Error);
});