export function median(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error("Error undefined");
    }
    if (numbers.length % 2 === 0) {
        const median: number = (numbers[(numbers.length/2)-1] + numbers[(numbers.length/2)]) / 2;
        return median;
    } else {
        const mediansIndex: number = Math.round(numbers.length/2)-1 ;
        const median: number = numbers[mediansIndex]
        return median;
    }
}
  