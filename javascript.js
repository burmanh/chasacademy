const num1 = 5
const num2 = 10

let sum = num1 + num2

console.log("The sum of " + num1 + " and " + num2 + " is: " + sum)

//num2 = 20

sum = num1 + num2
console.log("The new value of sum is: " + sum)

let listOfFruits = ["apple", "banana", "orange"]
let mixedList = [1, "apple", true, null, undefined]

let person = {
    name: "John",
    age: 30,
    member: false,
    isStudent: false,
    hobbies: ["reading", "gaming", "coding"],
    greet: function() {
        console.log("Hello, my name is " + this.name)
    }
}
person.greet()