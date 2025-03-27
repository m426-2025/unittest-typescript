export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  return mean;
}
export function median(numbers: number[]): number {
  if (numbers.length === 0) {
      throw new Error("Median is not defined for an empty array.");
  }

  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 1) {
      return sorted[mid];
  } else {
      return (sorted[mid - 1] + sorted[mid]) / 2;
  }
}
