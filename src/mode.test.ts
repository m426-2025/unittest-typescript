import { mode } from "./mode";

test("mode of [1]", () => {
  expect(mode([1])).toEqual([1]);
});

test("mode of [1, 1]", () => {
  expect(mode([1, 1])).toEqual([1]);
});

test("mode of [1, 1, 2]", () => {
  expect(mode([1, 1, 2])).toEqual([1]);
});

test("mode of [1, 1, 2, 2]", () => {
  expect(mode([1, 1, 2, 2])).toEqual([1, 2]);
});

test("mode of [1, 1, 2, 2, 3, 3]", () => {
  expect(mode([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
});

test("mode of [1, 1, 2, 2, 3, 3, 3]", () => {
  expect(mode([1, 1, 2, 2, 3, 3, 3])).toEqual([3]);
});
