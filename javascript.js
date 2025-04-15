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
    },
    highscore: [
        { game: "Pacman", score: 1000 },
        { game: "Tetris", score: 2000 },
        { game: "Mario", score: 3000 }
    ]
}
person.greet()
console.log(person.highscore[0].game + " " + person.highscore[0].score)
console.log(person.highscore[1].game + " " + person.highscore[1].score)
console.log(person.highscore[2].game + " " + person.highscore[2].score)


console.log(person)