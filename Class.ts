class Employee {
    id !: number;
    name !: string;
    address !: string;
}


class EmployeeWithDefaultConstructor {
    id : number;
    name : string;
    address : string;

    constructor(){
        this.id=1;
        this.name="john";
        this.address = "Highway on the road 71";
    }
}

class EmployeeWithParameterizedConstructor {
    id : number;
    name : string;
    address : string;

    /*constructor(){
        
    }*/
    constructor(id : number, name: string, address: string)
    {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}

let john = new Employee();
john.id= 1;
john.name = 'John';
john.address = 'Highway 71';

console.log(john);

let johnPlayer = new EmployeeWithParameterizedConstructor(1,"JohnPlayer","Hignway 71");
console.log(johnPlayer);

