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

// Omit 忽略
interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob : Omit<Person, 'age' | 'location'> = {
    name: 'Bob',
    // 因 Omit 刪除 age 以及 location 無法定義，只有 name 可以被定義
}

// Pick
interface Person {
    name: string;
    age: number;
    location?: string
}

const bob_1: Pick<Person, 'name'> = {
    name: 'Bob',
    // 因 Pick 只保留 name，所以 age 以及 location 都被刪除了，無法定義
}

// Exclude 排除
type Primitive = string | number | boolean;
const value: Exclude<Primitive, string> = true; // 因為已排除 string 所以在這不能使用

// ReturnType 
type PointGenerator = () => { x : number; y : number };
const point: ReturnType<PointGenerator> = {
    x : 10,
    y : 20,
}

// Parameters
type PointPrint = (p: { x: number; y: number; }) => void;
const point_1: Parameters<PointPrint>[0] = {
    x : 10,
    y : 20
}

// Readonly 唯讀
interface Person {
    name: string;
    age: number;
}
const person: Readonly<Person> = {
    name: "Dylan",
    age: 35,
};

person.name = 'Israel' // 因為 person 被設定為唯讀，所以不得被改變