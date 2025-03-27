

export function mean(numbers: number[]): number {
  if (numbers.length === 0) throw new Error("Cannot calculate mean of empty array");
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

export function median(numbers: number[]): number {
  if (numbers.length === 0) throw new Error("Cannot calculate median of empty array");
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 1
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

export function mode(numbers: number[]): number[] {
  const freq: Record<number, number> = {};
  numbers.forEach(n => freq[n] = (freq[n] || 0) + 1);
  const maxFreq = Math.max(...Object.values(freq));
  return Object.entries(freq)
    .filter(([, count]) => count === maxFreq)
    .map(([num]) => Number(num));
}

export function standardDeviation(numbers: number[]): number {
  if (numbers.length === 0) throw new Error("Cannot calculate standard deviation of empty array");
  const m = mean(numbers);
  const variance = numbers.reduce((sum, x) => sum + (x - m) ** 2, 0) / numbers.length;
  return Math.sqrt(variance);
}
