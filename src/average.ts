export function mean(numbers: number[]): number {
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  if (numbers.length === 0) {
    throw new Error("Cannot calculate mean of zero numbers");
  }
  const mean: number = sum / numbers.length;
  return mean;
}
