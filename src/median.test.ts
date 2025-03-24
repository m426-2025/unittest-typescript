import { median } from "./median";

test("test median for odd number of elements", () => {
    // Arrange
    const numbers = [1, 2, 6, 7, 8, 9, 10];
    const expected = 7;
    // Act
    const actual = median(numbers);
    // Assert
    expect(actual).toBe(expected);
}); 

test("median for even number of elements", () => {
    const numbers = [1, 2, 4, 5, 6, 7, 8, 9];
    const expected = (5 + 6) / 2;
    const actual = median(numbers);
    expect(actual).toBe(expected);
});

test("median for no elements", () => {
    const numbers: number[] = [];
    expect(() => median(numbers)).toThrowError("Liste darf nicht leer sein!");
});