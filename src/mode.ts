export function mode(numbers: number[]): number[] {
  const frequency: { [key: number]: number } = {};

  // Sayıların sıklığını hesapla
  numbers.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  // En yüksek sıklık değerini bul
  const maxFrequency = Math.max(...Object.values(frequency));

  // En yüksek sıklığa sahip olan sayıları döndür
  return Object.keys(frequency)
    .filter((key) => frequency[+key] === maxFrequency)
    .map((key) => +key);
}
