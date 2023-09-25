/*
    - update properties
*/

class User
{
    // Properties
    id: number;
    username: string;
    salary: number;
    msg: () => string;
    constructor(id: number, username: string, salary: number)
    {
        this.id = id;
        this.username = username;
        this.salary = salary < 6000 ? salary + 500 : salary;
        this.msg = function()
        {
            return `Hello ${this.username}, your Salary is ${this.salary}${salary < 6000 ? ', after bouns' : ''}`
        };
    }
    // Methods
    updateName (newName: string)
    {
        this.username = newName;
    }
}
let useOne = new User(10, 'tona', 2000)
let useTow = new User(11, 'LoL', 7000)
console.log(useOne.username);
console.log(useOne.salary);
console.log(useOne.msg());
useOne.updateName('anton')
console.log(useOne.username);


console.log('============================')

console.log(useTow.username);
console.log(useTow.salary);
console.log(useTow.msg());
