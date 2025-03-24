import { standardDeviation } from "./standardDeviation";

test("standard deviation of empty list throws", () => {
  expect(() => standardDeviation([])).toThrowError("Liste darf nicht leer sein!");
});

test("standard deviation of single element is 0", () => {
  expect(standardDeviation([5])).toBe(0);
});

test("standard deviation of [1, 3] is 1", () => {
  expect(standardDeviation([1, 3])).toBe(1);
});

test("standard deviation of [1, 5] is 2", () => {
  expect(standardDeviation([1, 5])).toBe(2);
});

test("standard deviation of [1, 2, 3, 4, 5] is around 1.414", () => {
  const sd = standardDeviation([1, 2, 3, 4, 5]);
  expect(sd).toBeGreaterThan(1.41);
  expect(sd).toBeLessThan(1.42);
});
