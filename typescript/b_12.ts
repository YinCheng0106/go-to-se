/* Arrays */

const names: string[] = [];
names.push("Dylan");

// Readonly
const names_1: readonly string[] = ["Dylan"];
names_1.push("Jack") // Error: 類型 'readonly string[]' 沒有屬性 'push'

// Type Inference
const numbers = [1, 2, 3];
numbers.push(4);

numbers.push("2"); // Error: 類型 'string' 的引數不可指派給類型 'number' 的參數。
let head: number = numbers[0];