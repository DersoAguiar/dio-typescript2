/*let employee = {};
employee.code = 10;
employee.name = "John";*/

let employee = {
    code: 10,
    name: 'John'
}

let employee2: {code: number, name: string } = {
    code: 10,
    name: 'John'
}

interface Employee {
    code: number,
    name: String
}

let employee3: Employee = {
    code: 200,
    name: 'John'
}