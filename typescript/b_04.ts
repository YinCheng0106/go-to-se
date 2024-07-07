/* Null & Undefined */

// strictNullChecks : true

let value: string | undefined | null = null;
console.log(typeof value); // Output: object

value = 'hello';
console.log(typeof value); // Output: string

value = undefined;
console.log(typeof value); // Output: undefined

// Optional Chaining
interface House{
    sqft: number;
    yard?:{
        sqft: number;
    };
}
function printYardSize(house: House){
    const yardSize = house.yard?.sqft;
    if(yardSize === undefined){
        console.log('No yard');
    } else {
        console.log(`Yard is ${yardSize} sqft`);
    }
}

let home : House = {
    sqft: 500
};

let home_1: House = {
    sqft: 100,
    yard:{
        sqft: 500
    }
};

printYardSize(home); // 'No yard'
printYardSize(home_1); // 'Yard is 500 sqft'

// Nullish Coalescence
function printMileage(mileage: number | null | undefined){
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}
printMileage(null); // Mileage: Not Available
printMileage(0); // Mileage: 0

// Null Assertion
function getValue(): string | undefined {
    return 'hello';
}
let value_1 = getValue();
console.log('value length: ' + value_1!.length); // Output: value length: 5

// Array bounds handling
let array : number[] = [1, 2, 3];
let value_2 = array[0];