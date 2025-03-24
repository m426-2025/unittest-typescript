export function mode(numbers: number[]): number[] {
    const frequencyMap = new Map<number, number>();
  
    for (const num of numbers) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  
    const maxFrequency = Math.max(...frequencyMap.values());
  
    const result = [...frequencyMap.entries()]
      .filter(([_, freq]) => freq === maxFrequency)
      .map(([num, _]) => num);
  
    return result;
  }
  