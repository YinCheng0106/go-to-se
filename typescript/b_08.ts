/* Utility Types */

// Partial
interface Point {
    x: number;
    y: number;
}

let pointPart: Partial<Point> = {};
pointPart.x = 10;

// Required 必須
interface Car {
    make: string;
    model: string;
    mileage: number;
}

let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000
};

// Record 紀錄
const nameAgeMap: Record<string, number> = {
    'Alice' : 21,
    'Bod' : 25,
};