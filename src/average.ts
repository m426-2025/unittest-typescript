export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
      throw new Error("Cannot calculate mean of an empty list.");
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

export function median(numbers: number[]): number {
  if (numbers.length === 0) {
      throw new Error("Cannot calculate median of an empty list.");
  }

  const sorted = numbers.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 1) {
      return sorted[mid]; // Ungerade Anzahl -> mittlerer Wert
  } else {
      return (sorted[mid - 1] + sorted[mid]) / 2; // Gerade Anzahl -> Durchschnitt der zwei Mittleren
  }
}
