let employeeArray: [number, string][] = [
  [1, "Mahmoud"],
  [2, "Omar"]
];

console.log(employeeArray[0]); // [1, "Mahmoud"]


console.log(employeeArray[1]?.[1]); // Omar

let employeesObject = {
    name:'Mahmoud',
    address:{
        country: 'Egypt',
        city:'Cairo'
    }
}

console.log(employeesObject.name);
console.log(employeesObject.address.city);