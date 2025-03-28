import { mean } from "./average";

test("mean of two numbers", () => {
  const numbers = [10, 20];
  const expected = 15;
  const result = mean(numbers);
  expect(result).toBe(expected);
});

test("mean of five numbers", () => {
  const numbers = [2, 4, 6, 8, 10];
  const expected = 6;
  const result = mean(numbers);
  expect(result).toBe(expected);
});

test("mean of no numbers throws error", () => {
  expect(() => mean([])).toThrow("List must not be empty");
});
