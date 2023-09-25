/*
    - built in constructor
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
// console.log(useOne.username);
// console.log(useOne.salary);
// console.log(useOne.msg());
// useOne.updateName('anton')
// console.log(useOne.username);

console.log('============================')

let strOne = 'Tona';
let strTwo = new String('anton');
console.log(typeof strOne) // String
console.log(typeof strTwo) // Object
console.log('#####################')
console.log(strOne instanceof String) // False
console.log(strTwo instanceof String) // True
console.log('#####################')
console.log(strOne.constructor === String) // True
console.log(strTwo.constructor === String) // True