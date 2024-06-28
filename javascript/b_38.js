/* Classes Inheritance */

class Car {
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return 'T have a ' + this.carname;
    }
    get cnam(){
        return this.carname;
    }
    set cnam(x){
        this.carname = x;
    }
}

class Model extends Car {
    constructor(brand, mod){
        super(brand); // 引用父類別
        this.model = mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());

const myCar_s = new Car("Ford"); // use setter
console.log(myCar_s.cnam);