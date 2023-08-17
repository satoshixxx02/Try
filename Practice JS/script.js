class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greetings(){
        return `Hello, ${this.firstName} ${this.lastName}`
    }
}
const p1 = new Person('Justine', 'Villanovar');
console.log(p1.greetings());
const p2 = new Person('Kim', 'Maasim');
console.log(p2.greetings());

