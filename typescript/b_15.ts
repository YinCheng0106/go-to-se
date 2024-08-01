/* Classes */

// Members: Types
class Person {
    name: string;
}

const person = new Person();
person.name = "Jane";

// Members: Visibility
class Person_1 {
    private name: string;

    public constructor(name: string){
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person_1 = new Person_1("Jane");
console.log(person_1.getName());

// Parameter Properties
class Person_2 {
    public constructor(private name: string) {}

    public getName(): string {
        return this.name;
    }
}

const person_2 = new Person_2("Jane");
console.log(person_2.getName());

// Readonly
class Person_3 {
    private readonly name: string;

    public constructor(name: string){
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person_3 = new Person_3("Jane");
console.log(person_3.getName());

// Inheritance: Implements
interface Shape {
    getArea: () => number;
}

class Rectangle_0 implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
        return this.width * this.height;
    }
}

// Inheritance: Extends
interface Shape {
    getArea: () => number;
}

class Rectangle_1 implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle_1 {
    public constructor(width: number){
        super(width, width);
    }
}

// Override
interface Shape {
    getArea: () => number;
}

class Rectangle_2 implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}

class Square_1 extends Rectangle_2 {
    public constructor(width: number){
        super(width, width);
    }

    public override toString(): string {
        return `Square[width=${this.width}]`;
    }   
}

// Abstract Classes
abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`;
    }
}

class Rectangle extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number){
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}