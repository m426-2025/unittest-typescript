export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Liste darf nicht leer sein");
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
    throw new Error("Leere Liste - Median nicht definiert");
  }

  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 1) {
    return sorted[mid];
  } else {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
}

export function mode(numbers: number[]): number[] {
  const freqMap: Record<number, number> = {};
  let maxFreq = 0;

  for (const num of numbers) {
    freqMap[num] = (freqMap[num] || 0) + 1;
    if (freqMap[num] > maxFreq) {
      maxFreq = freqMap[num];
    }
  }

  return Object.keys(freqMap)
    .map(Number)
    .filter(num => freqMap[num] === maxFreq)
    .sort((a, b) => a - b);
}

export function standardDeviation(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Leere Liste - Standardabweichung nicht definiert");
  }

  const meanValue = mean(numbers);
  const squaredDiffs = numbers.map(n => (n - meanValue) ** 2);
  const variance = squaredDiffs.reduce((sum, val) => sum + val, 0) / numbers.length;
  return Math.sqrt(variance);
}