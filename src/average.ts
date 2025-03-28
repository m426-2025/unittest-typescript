export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("List must not be empty");
  }

  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}