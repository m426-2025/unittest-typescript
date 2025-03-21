export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot compute mean of an empty array!");
  }
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}

export function median(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot compute median of an empty array!");
  }
  // Sortiere eine Kopie des Arrays (damit das Original unverändert bleibt)
  const sorted = [...numbers].sort((a, b) => a - b);
  const middleIndex = Math.floor(sorted.length / 2);

  // Ungerade Anzahl => Einzelnes mittleres Element
  if (sorted.length % 2 !== 0) {
    return sorted[middleIndex];
  } else {
    // Gerade Anzahl => Durchschnitt der beiden mittleren Elemente
    const left = sorted[middleIndex - 1];
    const right = sorted[middleIndex];
    return (left + right) / 2;
  }
}

export function mode(numbers: number[]): number[] {
  if (numbers.length === 0) {
    throw new Error("Cannot compute mode of an empty array!");
  }

  // Häufigkeiten zählen
  const frequencyMap = new Map<number, number>();
  for (const num of numbers) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Höchste Häufigkeit ermitteln
  let maxFreq = 0;
  for (const count of frequencyMap.values()) {
    if (count > maxFreq) {
      maxFreq = count;
    }
  }

  // Alle Elemente, die die maximale Häufigkeit haben, in ein Array packen
  const modes: number[] = [];
  for (const [num, freq] of frequencyMap.entries()) {
    if (freq === maxFreq) {
      modes.push(num);
    }
  }

  return modes;
}

export function standardDeviation(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot compute standard deviation of an empty array!");
  }

  // Mittelwert berechnen
  const m = mean(numbers);

  // Summe der quadratischen Abweichungen
  let sumOfSquares = 0;
  for (const num of numbers) {
    const diff = num - m;
    sumOfSquares += diff * diff;
  }

  // Standardabweichung = Wurzel aus (Summe / Anzahl)
  return Math.sqrt(sumOfSquares / numbers.length);
}
