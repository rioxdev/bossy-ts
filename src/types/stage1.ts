export interface Skier {
    slide(): void;
}

export interface Shooter {
    shoot(): void;
}

export type Biathlete = Skier & Shooter;

//tuple
export type ShirtSize = [string, string, string];

export function add(a: number, b: number, c: number = 0): number {
    return a + b + c;
}

//rest parameters
export function getAverage(...a: number[]): string {
    let count = a.length;
    let total = 0;
    for (let i = 0; i < a.length; i++) {
        total += a[i];
    }

    const average = total / count;
    return 'The average is ' + average;
}
