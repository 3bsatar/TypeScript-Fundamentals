const person: { name: string, ID: number, employed: boolean } = {
    name: 'Mahmoud',
    ID: 1,
    employed: true
    // age:25  Error!
}

console.log(person);

const contactInfo = {
    email: "mahmoud@gmail.com",
    phone: 12345
}

let mergedPerson = { ...person, ...contactInfo };
console.log(mergedPerson);

type Person = {
    name: string,
    ID: number
}

const Mahmoud: Person ={
    name:"Mahmoud",
    ID:1
}

console.log(Mahmoud);