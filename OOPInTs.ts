
// Classes & Object
// A class is a blueprint for creating objects. An object is an instance of a class.
class Animal {

    constructor(public animalName: string) {
    }

    greeting() {
        console.log(`Hello there, I'm a ${this.animalName}`)
    }
    move() {
        console.log(`I can walk`)
    }
}
const goat = new Animal('Goat');
// goat.animalName = 'Goat';
goat.greeting();
goat.move();

// 2. Inheritance
// Inheritance allows one class to extend another.


// 3. Encapsulation
// Encapsulation hides internal state and exposes only what's necessary.
// 4. Polymorphism
// Polymorphism lets you treat different classes through a common interface or base class.