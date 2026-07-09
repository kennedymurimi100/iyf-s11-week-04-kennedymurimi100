// Variable declarations
let name = "Kennedymurimi100";
let age = 25;
const birthYear = 1999;

// typeof operator
console.log(typeof name);    // string
console.log(typeof age);     // number
console.log(typeof true);    // boolean

// let vs const
let score = 100;
score = 150;  // Works!

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned

// Exercise: Variable Practice
let studentName = "kennedyMurimi100";
let studentAge = 27;
let isStudent = true;
let favoriteColors = ["Gold", "Black", "White"];
let today = new Date();

console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Student:", isStudent);
console.log("Favorite Colors:", favoriteColors);
console.log("Today's Date:", today);

// ==========================
// Task 7.2 - Number Operations
// ==========================

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Increment/Decrement
let count = 0;
count++;
console.log("After increment:", count);

count--;
console.log("After decrement:", count);

// ==========================
// String Operations
// ==========================

let firstName = "kennedy";
let lastName = "Murimi100";

let fullName = firstName + " " + lastName;

let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Jack"));

console.log(greeting);
console.log(message);

// ==========================
// Comparison Operators
// ==========================

console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);
console.log("5 === 5:", 5 === 5);
console.log('5 == "5":', 5 == "5");
console.log("5 !== 3:", 5 !== 3);

// ==========================
// Logical Operators
// ==========================

console.log("true && true:", true && true);
console.log("true || false:", true || false);
console.log("!true:", !true);

// ==========================
// Challenge
// ==========================

let myAge = 27;

let ageInDays = myAge * 365;
let ageInHours = ageInDays * 24;
let yearTurn100 = new Date().getFullYear() + (100 - myAge);

console.log(`Age in days: ${ageInDays}`);
console.log(`Age in hours: ${ageInHours}`);
console.log(`I will turn 100 in the year ${yearTurn100}`);

// ==========================
// Task 7.3 - Functions
// ==========================

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// Test the functions
console.log(greet("kennedy"));
console.log(add(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));
console.log(divide(10, 0));

// Rectangle area
function calculateArea(width, height) {
    return width * height;
}

// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Get initials
function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(name => name.charAt(0))
        .join("")
        .toUpperCase();
}

// Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Test the functions
console.log("Area:", calculateArea(5, 10));
console.log("Temperature:", celsiusToFahrenheit(25));
console.log("Is 8 even?", isEven(8));
console.log("Initials:", getInitials("kennedyMurimi100"));
console.log("Reverse:", reverseString("JavaScript"));


// ==========================
// Default Parameters
// ==========================

function greetUser(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetUser());
console.log(greetUser("Kennedy"));
console.log(greetUser("Kennedy", "Welcome"));

// ==========================
// Calculate Tip
// ==========================

function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

// Test the function
console.log("Tip on KSh 1000:", calculateTip(1000));
console.log("20% Tip on KSh 1000:", calculateTip(1000, 20));
console.log("10% Tip on KSh 500:", calculateTip(500, 10));

// ==========================
// Task 7.4 - Control Flow
// If/Else Statements
// ==========================

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Test the function
console.log("95:", getGrade(95));
console.log("84:", getGrade(84));
console.log("76:", getGrade(76));
console.log("61:", getGrade(61));
console.log("40:", getGrade(40));

// ==========================
// Switch Statement
// ==========================

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

// Test the function
console.log(getDayName(0));
console.log(getDayName(3));
console.log(getDayName(6));
console.log(getDayName(8));

// ==========================
// Loops
// ==========================

// For loop
console.log("For Loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
console.log("While Loop:");
let countLoop = 0;
while (countLoop < 5) {
    console.log(countLoop);
    countLoop++;
}

// For...of loop
console.log("For...of Loop:");
const colors = ["Red", "Green", "Blue"];

for (const color of colors) {
    console.log(color);
}


// ==========================
// Print Numbers 1-100
// ==========================

console.log("Numbers 1-100:");

for (let i = 1; i <= 100; i++) {
    console.log(i);
}


// ==========================
// Even Numbers 1-50
// ==========================

console.log("Even Numbers:");

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// ==========================
// FizzBuzz
// ==========================

console.log("FizzBuzz:");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}

// ==========================
// Triangle of Stars
// ==========================

console.log("Triangle:");

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

// ==========================
// Mini-Project: Calculator
// ==========================

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }

    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiplyNumbers(num1, num2);

        case "/":
            return divideNumbers(num1, num2);

        case "%":
            return num1 % num2;

        case "**":
            return num1 ** num2;

        default:
            return "Invalid operator";
    }
}

// ==========================
// Calculator Tests
// ==========================

console.log("10 + 5 =", calculate(10, "+", 5));
console.log("10 - 5 =", calculate(10, "-", 5));
console.log("10 * 5 =", calculate(10, "*", 5));
console.log("10 / 5 =", calculate(10, "/", 5));
console.log("10 % 3 =", calculate(10, "%", 3));
console.log("10 ** 2 =", calculate(10, "**", 2));
console.log("10 / 0 =", calculate(10, "/", 0));
console.log("10 ? 5 =", calculate(10, "?", 5));

// ==========================
// Task 8.1 - Arrays
// Array Basics
// ==========================

// Creating arrays
const fruits = ["apple", "watermelon", "mango"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Accessing elements
console.log("First fruit:", fruits[0]);
console.log("Number of fruits:", fruits.length);

// Modifying arrays
fruits.push("orange");      // Add to end
fruits.unshift("pineapple");   // Add to beginning
fruits.pop();              // Remove last element
fruits.shift();            // Remove first element

console.log("Updated fruits:", fruits);
console.log("Mixed array:", mixed);

// ==========================
// Array Methods
// ==========================

const numberList = [1, 2, 3, 4, 5];

// forEach
console.log("Numbers doubled using forEach:");
numberList.forEach(num => console.log(num * 2));

// map
const doubled = numberList.map(num => num * 2);
console.log("Doubled:", doubled);

// filter
const evenNumbers = numberList.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// find
const firstEven = numberList.find(num => num % 2 === 0);
console.log("First even number:", firstEven);

// reduce
const sum = numberList.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// includes
console.log("Contains 3?", numberList.includes(3));

// ==========================
// Array Exercises
// ==========================

const practiceNumbers = [2, -5, 8, 12, -1, 15, 4];

// 1. Double all numbers
const doubledNumbers = practiceNumbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

// 2. Filter out negative numbers
const positiveNumbers = practiceNumbers.filter(num => num >= 0);
console.log("Positive Numbers:", positiveNumbers);

// 3. Find the first number greater than 10
const firstGreaterThanTen = practiceNumbers.find(num => num > 10);
console.log("First Number > 10:", firstGreaterThanTen);

// 4. Calculate the product of all numbers
const product = practiceNumbers.reduce((total, num) => total * num, 1);
console.log("Product of all numbers:", product);

// ==========================
// Task 8.2 - Objects
// Object Basics
// ==========================

const person = {
    firstName: "Kennedy",
    lastName: "Murimi100",
    age: 27,
    isStudent: true,
    hobbies: ["Gaming", "Reading", "Music"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// Accessing properties
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

// Modifying properties
person.age = 28;
person.email = "kennedy@example.com";
delete person.isStudent;

console.log(person);

// ==========================
// Object Methods
// ==========================

const calculatorObject = {
    add: function(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply: (a, b) => a * b
};

console.log("Add:", calculatorObject.add(5, 3));
console.log("Subtract:", calculatorObject.subtract(10, 4));
console.log("Multiply:", calculatorObject.multiply(6, 7));

// ==========================
// Object Iteration
// ==========================

const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get keys
console.log("Subjects:", Object.keys(scores));

// Get values
console.log("Scores:", Object.values(scores));

// Get entries
console.log("Entries:", Object.entries(scores));

// Loop through the object
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

// ==========================
// Task 8.3 - Array of Objects
// ==========================

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

console.log(students);

// ==========================
// Array of Objects - Exercises
// ==========================

// 1. Get all student names
const names = students.map(student => student.name);
console.log("Student Names:", names);

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log("High Achievers:", highAchievers);

// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
console.log("Charlie:", charlie);

// 4. Calculate average grade
const avgGrade =
    students.reduce((total, student) => total + student.grade, 0) /
    students.length;

console.log("Average Grade:", avgGrade);

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log("CS Majors:", csMajors);

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log("Sorted by Grade:", sortedByGrade);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log("Has Top Student:", hasTopStudent);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log("All Students Passing:", allPassing);

// ==========================
// Mini-Project: Student Grade Tracker
// ==========================

const gradeTracker = {
    students: [],

    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);

        if (!student) {
            return null;
        }

        const grades = Object.values(student.grades);
        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return total / grades.length;
    },

    // Get class average for a subject
    getSubjectAverage(subject) {
        const subjectGrades = this.students
            .map(student => student.grades[subject])
            .filter(grade => grade !== undefined);

        if (subjectGrades.length === 0) {
            return null;
        }

        const total = subjectGrades.reduce((sum, grade) => sum + grade, 0);

        return total / subjectGrades.length;
    },

    // Get top performer
    getTopStudent() {
        if (this.students.length === 0) {
            return null;
        }

        return this.students.reduce((topStudent, currentStudent) => {
            return this.getStudentAverage(currentStudent.name) >
                this.getStudentAverage(topStudent.name)
                ? currentStudent
                : topStudent;
        });
    },

    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students.filter(student => {
            return this.getStudentAverage(student.name) < 70;
        });
    },

    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) {
            return "A";
        } else if (score >= 80) {
            return "B";
        } else if (score >= 70) {
            return "C";
        } else if (score >= 60) {
            return "D";
        } else {
            return "F";
        }
    },

    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);

        if (!student) {
            return "Student not found.";
        }

        const average = this.getStudentAverage(name);

        return `
Report Card
------------
Name: ${student.name}
Math: ${student.grades.math}
English: ${student.grades.english}
Science: ${student.grades.science}
Average: ${average.toFixed(2)}
Letter Grade: ${this.getLetterGrade(average)}
`;
    }
};

// ==========================
// Test Grade Tracker
// ==========================

gradeTracker.addStudent("Alice", {
    math: 95,
    english: 88,
    science: 92
});

gradeTracker.addStudent("Bob", {
    math: 72,
    english: 85,
    science: 78
});

gradeTracker.addStudent("Charlie", {
    math: 60,
    english: 65,
    science: 58
});

console.log(gradeTracker.getStudentAverage("Alice"));
console.log(gradeTracker.getSubjectAverage("math"));
console.log(gradeTracker.getTopStudent());
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Alice"));

