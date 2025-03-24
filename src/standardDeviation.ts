export function standardDeviation(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error("Liste darf nicht leer sein!");
    }
  
    const mean = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
  
    const squaredDiffs = numbers.map(n => (n - mean) ** 2);
    const variance = squaredDiffs.reduce((sum, d) => sum + d, 0) / numbers.length;
  
    return Math.sqrt(variance);
  }
  