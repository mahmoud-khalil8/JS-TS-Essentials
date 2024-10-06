function addCounter() {
    let counter=0 
    return function(){
        counter++ ;
        return count
    }
}
let counter=addCounter() ;
console.log(counter()) ;//1
/*
clojures are functions that return another function
clojures are used to create private variables 
in the above example the addCounter function returns a function 
that increments the counter variable 
the counter variable is not accessible outside the addCounter function
how it knows the value of the counter variable is because 
of the concept of clojures which allows the inner function to access the outer function's variables
how that works low level is that the inner function has a reference to the outer function's variables
and that reference is called the environment  of the inner function
the environment is a reference to the variables of the outer function

*/
console.log(counter()) ;//2
console.log(counter()) ;//3