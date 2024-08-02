/* Basic Generics */

// Function
function createPair<S, T>(v1: S, v2:  T): [S, T] {
    return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // Output: ['hello', 42]

// Classes
class NamedValue<T> {
    private _value: T | undefined;

    constructor(private name: string) {}

    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}

let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString()); // Output: myNumber: 10

// Type Aliases
type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };

// Default Value
class NamedValue_1<T> {
    private _value: T | undefined;

    constructor(private name: string) {}

    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}

let value_1 = new NamedValue_1('myNumber');
value_1.setValue('myValue');
console.log(value.toString());

// Extends
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T]
{
    console.log(`creating pair: v1='${v1}', v2='${v2}`);
}