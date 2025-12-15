
// Classes & Object
// A class is a blueprint for creating objects. An object is an instance of a class.
class Animal {
    private animalSize = 'Big';
    protected animalAge = 13;

    constructor(public animalName: string) {
    }

    greeting() {
        console.log(`Hello there, I'm a ${this.animalName}`)
    }
    move() {
        console.log(`I can walk`)
    }

    setAnimalSize(animalSize: string) {
        this.animalSize = animalSize;
    }
    getAnimalSize() {
        return this.animalSize;
    }
}
const goat = new Animal('Goat');
// goat.animalName = 'Goat';
goat.greeting();
goat.move();
goat.setAnimalSize('Large');
console.log(goat.getAnimalSize);


// 2. Inheritance
// Inheritance allows one class to extend another.
class Monkey extends Animal {
    public animalAge = 16;
    constructor(animalName: string) {
        super(animalName);
    }
    getAnimalAge() {
        return this.animalAge;
    }
    move() {
        console.log(`I can walk and I can jump`)
    }
}
const monkey = new Monkey('Monkey');
monkey.greeting();
monkey.move();
console.log(monkey.animalAge);

// 3. Encapsulation
// Encapsulation hides internal state and exposes only what's necessary.


// 4. Polymorphism
// Polymorphism lets you treat different classes through a common interface or base class.
