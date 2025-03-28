import { add, subtract } from "./calculator";

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
  const actual: number = subtract(a, b);
  expect(actual).toBe(expected);
});
