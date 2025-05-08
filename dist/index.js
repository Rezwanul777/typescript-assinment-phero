"use strict";
//Description: Create a function that takes a string and an optional boolean.If the boolean is true or not provided, return the string in uppercase.If the boolean is false, return the string in lowercase.
function formatString(input, toUpper = true) {
    if (toUpper) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
console.log(formatString('prince'));
console.log(formatString('prince', true));
console.log(formatString('prince', false));
//Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.
function filterByRating(items) {
    return items.filter(item => item.rating >= 4);
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
console.log(filterByRating(books));
//Create a generic function that concatenates multiple arrays of the same type using rest parameters.
function concatenateArrays(...arrays) {
    return arrays.flat();
}
console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
//
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year); // Call the constructor of the parent class
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
// Example usage:
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
console.log(myCar.getModel());
