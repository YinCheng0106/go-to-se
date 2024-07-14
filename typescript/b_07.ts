/* Enums */

// Numeric Enums - Default
enum CardinalDirections {
    North,
    East,
    South,
    West
}
let currentDirection = CardinalDirections.North;
console.log(currentDirection);
currentDirection = 'North';

// Numeric Enums - Initialized
enum CardinalDirections_I {
    North = 1,
    East,
    South,
    West
}
console.log(CardinalDirections_I.North); // Output: 1
console.log(CardinalDirections_I.West); // Output: 4

// Numeric Enums - Fully Initialized
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BasRequest = 400
}
console.log(StatusCodes.NotFound); // Output: 404
console.log(StatusCodes.Success); // Output: 200

// String Enums
enum CardinalDirections_SE {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
};
console.log(CardinalDirections_SE.North); // Output: "North"
console.log(CardinalDirections_SE.West); // Output: "West"