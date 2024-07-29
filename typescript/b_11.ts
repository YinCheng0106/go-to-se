/* Functions */

// Return Type
function getTime(): number {
    return new Date().getTime();
}

// Void Return Type
function printHello(): void {
    console.log('Hello!');
}

// Parameters
function multiply(a: number, b: number){
    return a * b;
}

// Optional Parameters
function add(a: number, b: number, c?: number){
    return a + b + (c || 0);
}

// Default Parameters
function pow(value: number, exponent: number = 10){
    return value ** exponent;
}

// Named Parameters
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}

// Rest Parameters
function add_r(a: number, b: number, ...rest: number[]){
    return a + b + rest.reduce((p, c) => p + c, 0);
}

// Type Alias
type Negate = (value: number) => number;
const negateFunction: Negate = (value) => value * -1;