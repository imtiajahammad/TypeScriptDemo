export interface User{
    name: string;
    age?: number;
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


let user : User ={ name: "John", id: 31, email: "alu@gmail.com"};
//#region object-destructioning
let { name : UserName, email: UserLogin } : User = { name: "John", id:21, email:"aluvorta@gmail.com"};
console.log("object destructioning: " + UserName);
console.log("object destructioning: " + UserLogin);
//#endregion object-destructioning
interface ExtendedUser extends User{
    salary: number;
}
let extendedEmployee : ExtendedUser = { name:"John",id:21,email:"kalke@gmail.com",salary:32000};
console.log(extendedEmployee);




export interface login{
    /*whereever you need to use your interface outside its own class, it needs to be added with export keyword, so that it can be imported other places */
    Login(): User;
}




let [user1,user2, ...restUsers] : User[] = [
    {
    name: "John",
    email: "john@gmail.com",
     id: 50
    }
    ,{
        name: "John2",
        email: "john2@gmail.com",
         id: 51
        }
    ,{
        name: "John3",
        email: "john3@gmail.com",
         id: 52
        }
    ];
console.log(user1);
console.log(user2);
console.log("------------------------");
console.log(restUsers);
console.log("------------------------");
let result = restUsers.filter(user => user.id > 50);
console.log(result);