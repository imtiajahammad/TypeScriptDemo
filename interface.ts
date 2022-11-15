interface User{
    name: string;
    age: number;
    id: number;
    email: string;
}

interface Address{
    street: string;
        city: string;
        state: string;
        pin: string;
}

var Users = {
    name: "",
    age: 1,
    id: 32,
    email: "dfd@gmail.com"
}

class EmployeeUser{
    id: number;
    protected name: string;

    address: Address
    constructor(id:number,name:string,address:Address){
        this.id= id;
        this.name=name;
        this.address=address;
    }
}
let emps = new EmployeeUser(22,"Name User",{ street:"ABC", city: "Bangalore",state:"Karnataka",pin:"3342"});
console.log(emps);