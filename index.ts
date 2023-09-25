/*
    - static properties and methods
*/

class User
{
    // Properties
    id: number;
    username: string;
    salary: number;
    static count = 0;
    constructor(id: number, username: string, salary: number)
    {
        this.id = id;
        this.username = username;
        this.salary = salary;
        User.count++;
    }
    static sayHello ()
    {
        return 'Hello Form Class'
    }
    static countMembers ()
    {
        return `${this.count} members Created`
    }
}
let useOne = new User(10, 'tona', 2000)
let useTow = new User(11, 'LoL', 7000)
let useThere = new User(12, 'KOK', 6000)

// console.log(useOne.count); // undefined
// console.log(User.count);

// console.log(useOne.sayHello); // undefined
// console.log(User.sayHello);

console.log(User.countMembers()); // 3