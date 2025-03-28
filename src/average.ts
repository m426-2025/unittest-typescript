export function mean(numbers: number[]): number {
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  if (numbers.length === 0) {
    throw new Error('Cannot calculate mean of empty list');
  }
  return mean;
}

export function median(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('Cannot calculate median of empty list');
  }
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 1) {
    return sorted[mid];
  } else {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
}