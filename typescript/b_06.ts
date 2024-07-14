/* Object Types */

const car : { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

// Type Inference
const car_1 = {
    type: "Toyota",
};
car_1.type = "Ford";
car_1.type = 1;

// Optional Properties
const car_2 : { type: string, mileage: number } = {
    // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
    type : "Toyota",
};
car_2.mileage = 2000;

const car_3 : { type: string, mileage? : number } = {
    type : "Toyota"
};
car_3.mileage = 2000;

// Index Signatures
const nameAgeMap : { [index: string]: number } = {};
nameAgeMap.Jack = 25;
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
