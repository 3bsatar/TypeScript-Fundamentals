class Employee{
    static companyName='Company';
    private static employCount=0;

    constructor(employeeName:string){
        Employee.employCount++
    }

    static employeeAge(){
        return 25;
    }
    static getEmployeesCount(){
        return Employee.employCount;
    }
}

console.log(Employee.companyName);
console.log(Employee.employeeAge());
console.log(Employee.getEmployeesCount());
const mahmoud = new Employee('Mahmoud');
console.log(Employee.getEmployeesCount());
const omar = new Employee('Omar');
console.log(Employee.getEmployeesCount());
