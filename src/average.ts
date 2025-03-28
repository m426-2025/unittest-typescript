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

export function mode(numbers: number[]): number[] {
  const frequency: { [key: number]: number } = {};
  
  // Zähle die Häufigkeit jedes Elements
  for (let num of numbers) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  // Bestimme die höchste Häufigkeit
  const maxFrequency = Math.max(...Object.values(frequency));

  // Finde alle Zahlen mit der höchsten Häufigkeit
  const modes = Object.keys(frequency)
    .filter(key => frequency[parseInt(key)] === maxFrequency)
    .map(key => parseInt(key));

  return modes;
}

export function standardDeviation(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate standard deviation of an empty list.");
  }

  const meanValue = mean(numbers);  // Verwendet die bereits bestehende mean-Funktion

  const squaredDifferences = numbers.map(num => Math.pow(num - meanValue, 2));
  const averageSquaredDifference = squaredDifferences.reduce((acc, val) => acc + val, 0) / numbers.length;

  return Math.sqrt(averageSquaredDifference);
}
