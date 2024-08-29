//encapsulation

/*  Encapsulation is the bundling of data with the methods that operate on
 that data, or the restricting of direct access to some of an object's components.
  Encapsulation is used to hide the values or state of a structured data object 
  inside a class, preventing unauthorized parties' direct access to them.
*/
class Person {
  name: string = ''
  age: number = 0
}
class Motor {
  make: string = ''
  model: string = ''
}

const person1 = new Person()
const motor1 = new Motor()

// motor1.age=10 ==> error

// Abstraction

/* Abstraction is the concept of exposing only 
the required essential characteristics and behavior with respect to a context.
Abstraction is the concept of hiding the complex implementation details 
and showing only the functionality to the users.
*/
/* we can use public private protected static readonly 
*/
class Person2 {
  private name: string = ''
  public age: number = 0
  private readonly address: string = ''
  constructor(name: string, age: number, address: string) {
    this.name = name
    this.age = age
    this.address = address
  }
  public getName() {
    return this.name
  }
  public getAge() {
    return this.age
  }

}
const person2 = new Person2('John', 20, 'NY')
/*
private readonly means it can only be updated within the constructor
*/

// Inheritance
/* Inheritance is the mechanism of basing an object or class 
upon another object (prototype-based inheritance) or class (class-based inheritance),
 */
class Animal {
  name: string = ''
  constructor(name: string) {
    this.name = name
  }
  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`)
  }
}
class Dog extends Animal {
  constructor(name: string) {
    super(name)
    //super is used to call the constructor of the parent class
  }
  bark() {
    console.log('Woof! Woof!')
  }
}
const dog1 = new Dog('Buddy')
dog1.bark()
dog1.move(10)

// Polymorphism
/* Polymorphism is the ability of an object to take on many forms.
The most common use of polymorphism in OOP occurs when a parent class reference
is used to refer to a child class object.
*/

class Animal2 {
  name: string = ''
  constructor(name: string) {
    this.name = name
  }
  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`)
  }
}
class Dog2 extends Animal2 {
  constructor(name: string) {
    super(name)
  }
  move(distance: number = 5) {
    console.log('Dog Running...')
    super.move(distance)
  }
}
class Cat extends Animal2 {
  constructor(name: string) {
    super(name)
  }
  move(distance: number = 2) {
    console.log('Cat Walking...')
    super.move(distance)
  }
}
function moveAnimal(animal: Animal2) {
  animal.move()
}
const dog = new Dog2('Buddy')
const cat = new Cat('Tom')

moveAnimal(dog)

/* private : restricts the access of properties and methods within the class
it cant be accessed even by subclasses
static: allows the properties and methods to be accessed without
 creating an instance of the class
public : allows the properties and methods to be accessed from outside the class
readonly: restricts the properties from being updated after initialization
protected: restricts the access of properties and methods within the class
    and subclasses its like "private" but can be accessed by subclasses
*/
//private 
class Person3 {
  private name: string = ''
  private age: number = 0
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  public getName() {
    return this.name
  }
  public getAge() {
    return this.age
  }
}
const person3 = new Person3('John', 20)
// person3.name = 'Doe' ==> error

//static
class Person4 {
  static species: string
  name: string = ''
  age: number = 0
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  public getName() {
    return this.name
  }
  public getAge() {
    return this.age
  }
}
Person4.species

//readonly
class Person5 {
  readonly name: string = ''
  age: number = 0
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  public getAge() {
    return this.age
  }
}
const person5 = new Person5('John', 20)
// person5.name = 'Doe' ==> error

//protected
class Animal3 {
  protected sound: string;

  constructor(sound: string) {
    this.sound = sound;
  }

  protected makeSound() {
    console.log(this.sound);
  }
}

class Dog3 extends Animal3 {
  constructor() {
    super("Bark");
  }

  public bark() {
    this.makeSound(); // Accessible here
  }
}

const dog3 = new Dog3();
dog3.bark(); // Bark
// dog.makeSound(); // Error: Method 'makeSound' is protected and only accessible within class 'Animal' and its subclasses.
