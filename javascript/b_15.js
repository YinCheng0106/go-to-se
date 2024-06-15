/* Bitwise Operations */

// & AND
let x = 5 & 1; // 0001 (1)
console.log(x);

// | OR
let y = 5 | 1; // 0101 (5)
console.log(y);

// ^ XOR
let z = 5 ^ 1; // 0100 (4)
console.log(z);

// ~ NOT
let m = ~5; // 11111111111111111111111111111010 (-6)
console.log(m);

// << Bitwise Left Shift
let n = 5 << 1; // 00000000000000000000000000001010 (10)
console.log(n);

// >> Bitwise Right Shift
let p = -5 >> 1; // 11111111111111111111111111111101 (-3)
console.log(p);

// >>> Right Shift
let q = 5 >>> 1; // 00000000000000000000000000000010 (2)
console.log(q);