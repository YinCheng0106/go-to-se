/* Keyof */

// keyof with explicit keys
interface Person {
    name: string;
    age: number;
}

function printPersonProperty(person: Person, property: keyof Person){
    console.log(`Printing person property ${property}: "${person[property]}"`);
}

let person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "name"); // Printing person property name: "Max"

// keyof with index signatures
type StringMap = { [key: string]: unknown };
function createStringPair(property: keyof StringMap, value: string): StringMap {
    return { [property]: value};
}