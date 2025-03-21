export function median(numbers: number[]): number {

    const median =  numbers.sort((a, b) => a - b);
    return median
}