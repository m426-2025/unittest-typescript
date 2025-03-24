export function median(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error("Liste darf nicht leer sein!");
    }
  
    // Kopie udn Sortierung
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
  
    if (sorted.length % 2 === 1) {
      // Ungerade Anzahl -> mittleres Element
      return sorted[mid];
    } else {
      // Gerade Anzahl -> Mittelwert der zwei mittleren
      return (sorted[mid - 1] + sorted[mid]) / 2;
    }
  }
  