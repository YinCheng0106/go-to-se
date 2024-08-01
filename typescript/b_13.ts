/* Tuples */

let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];

// Readonly Tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
ourReadonlyTuple.push('Coding God took a day off'); // Error: 類型 'readonly [number, boolean, string]' 沒有屬性 'push'。

// Named Tuples
const graph: [x: number, y: number] = [55.2, 41.3];

// Destructuring Tuples
const graph_1: [number, number] = [55.2, 41.3];
const [x, y] = graph_1;