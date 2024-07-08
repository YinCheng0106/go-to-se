/* TypeScript 5.x Updates */

// Template Literal Types
type Color = "red" | "green" | "blue";
type HexColor<T extends Color> = `#${string}`;

let myColor : HexColor<"blue"> = "#0000FF";

// Index Signature Labels
// type DynamicObject = { [key: string as `dynamic_${string}`]: string };

// // Usage:
// let obj: DynamicObject = { dynamic_key: "value" };