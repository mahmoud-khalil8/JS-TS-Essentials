//builder pattern
//usage when you want to construct complex objects step by step
//without having to create a constructor with a long list of parameters
// Define the User type with optional properties

interface User {
    firstName?: string;
    lastName?: string;
    age?: number;
}

// Builder class that builds a User
class UserBuilder {
    private user: User;

    constructor() {
        this.user = {}; // Initialize an empty User object
    }

    setFirstName(firstName: string): this {
        this.user.firstName = firstName;
        return this;
    }

    setLastName(lastName: string): this {
        this.user.lastName = lastName;
        return this;
    }

    setAge(age: number): this {
        this.user.age = age;
        return this;
    }

    build(): User {
        return this.user;
    }
}

// Usage
const user = new UserBuilder()
    .setFirstName('John')
    .setLastName('Doe')
    .setAge(30)
    .build();

console.log(user);
