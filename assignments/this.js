/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/global binding: bound to the outermost global object (the window). This is default binding when not using any of the other rules.
* 2. Implicit (local) binding: bound to a specific object inside a function (as in object.function()) with dot notation
* 3. New binding: using a constructor function to create an object, with binding to that new object
* 4. Explicit binding: using an object-oriented approach to override what the constructor object gets set to (using .call, .apply, or .bind)
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowBinding() {
    console.log(this);
}
windowBinding();

// Principle 2

// code example for Implicit Binding


// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
const myInfo = function () {
    console.log('My name is ' + this.firstName + ' ' + this.lastName);
};

const myName = {
    firstName: 'Tara',
    lastName: 'Sherman'
};

myInfo.call(myName);