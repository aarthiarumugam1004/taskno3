// Task 1 - Student Details
const collegeName = "Government Engineering College";
let studentName = "Anbarasan";
var studentAge = 20;

console.log(collegeName);
console.log(studentName);
console.log(studentAge);

// Task 2 - Mobile Price
let price = 25000;
price = 27000;
console.log(price);

// Task 3 - Company Name
const company = "Google";
// company = "Alphabet";
console.log(company);

// Task 4 - Console Practice
console.log("Login Successful");
console.warn("Password is Weak");
console.error("Network Error");

// Task 5 - Data Types
let name = "Kavin";
let age = 22;
let isDeveloper = true;
let uninitialized;

console.log(name, typeof name);
console.log(age, typeof age);
console.log(isDeveloper, typeof isDeveloper);
console.log(uninitialized, typeof uninitialized);

// Task 6 - Shopping Cart Array
const cart = ["Laptop", "Mouse", "Keyboard", "Headset", "Monitor"];

console.log(cart[0]);
console.log(cart[2]);
console.log(cart[cart.length - 1]);

// Task 7 - Favorite Movies
const favoriteMovies = ["Baashha", "Mankatha", "Vikram", "Kathi", "Asuran", "Jailer"];

console.log(favoriteMovies[1]);
console.log(favoriteMovies[4]);
console.log(favoriteMovies[favoriteMovies.length - 1]);

// Task 8 - Employee Object
const employee = {
name: "Rajesh",
age: 28,
department: "Software Engineering",
skills: ["JavaScript", "React", "Node.js"],
salary: 60000
}

console.log(employee.name);
console.log(employee.department);
console.log(employee.skills[0]);
console.log(employee.salary);

// Task 9 - Product Details
const product = {
productName: "iPhone 15",
brand: "Apple",
price: 79999,
colors: ["Black", "Blue", "Yellow"]
}

console.log(product.brand);
console.log(product.price);
console.log(product.colors[1]);

// Task 10 - Arithmetic Calculator
let num1 = 15;
let num2 = 4;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

// Task 11 - Increment Practice
let a = 5;

a++;
console.log(a);

++a;
console.log(a);

a--;
console.log(a);

--a;
console.log(a);

// Task 12 - Predict the Output
let a12 = 10;
let b12 = a12++;
let c12 = ++b12;

console.log(a12);
console.log(b12);
console.log(c12);

// Task 13 - Predict the Output
let x = 7;
let y = --x;
let z = y++;

console.log(x);
console.log(y);
console.log(z);

// Task 14 - School Object
const school = {
schoolName: "KV Matriculation School",
principal: "Dr. Meenakshi",
totalStudents: 1200,
classes: ["Class 10", "Class 11", "Class 12"]
}

console.log(school.schoolName);
console.log(school.principal);
console.log(school.classes[school.classes.length - 1]);

// Task 15 - Grocery List
const groceryList = ["Rice", "Dal", "Sugar", "Milk", "Coffee Powder", "Cooking Oil", "Onions", "Potatoes"];

console.log(groceryList[0]);
console.log(groceryList[3]);
console.log(groceryList[groceryList.length - 1]);

// Task 16 - User Profile
let username = "senthil_99";
let email = "senthil@example.com";
let userAge = 25;
let isPremium = false;

console.log(username, typeof username);
console.log(email, typeof email);
console.log(userAge, typeof userAge);
console.log(isPremium, typeof isPremium);

// Task 17 - Variable Rules
var varTest = 10;
varTest = 20;
var varTest = 30;
console.log(varTest);

let letTest = 100;
letTest = 200;
// let letTest = 300;
console.log(letTest);

const constTest = 1000;
// constTest = 2000;
// const constTest = 3000;
console.log(constTest);

// Task 18 - Marks Calculation
let tamil = 85;
let english = 90;
let maths = 95;

let total = tamil + english + maths;
let average = total / 3;

console.log(total);
console.log(average);

// Task 19 - Company Database
const companyDb = {
companyName: "TechCorp TamilNadu",
employees: ["Karthik", "Priya", "Manoj", "Divya"],
location: "Chennai, India",
foundedYear: 2018,
ceo: "Sundar Rajan"
}

console.log(companyDb.ceo);
console.log(companyDb.location);
console.log(companyDb.employees[0]);

// Task 20 - Mini Profile
const miniProfile = {
name: "Deepak",
city: "Madurai",
hobbies: ["Reading Books", "Playing Cricket", "Photography"],
age: 21
}

console.log(miniProfile.name);
console.log(miniProfile.hobbies[1]);
console.log(miniProfile.age);
