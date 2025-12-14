let person: [string, number] = ['Mahmoud', 123];

let username: string = person[0];
let userID: number = person[1];

console.log(username);
console.log(userID);

person[0]='Mohamed';
person[1]=234;
username= person[0];
userID= person[1];

console.log(username);
console.log(userID);
