//Description: Create a function that takes a string and an optional boolean.If the boolean is true or not provided, return the string in uppercase.If the boolean is false, return the string in lowercase.
function formatString(input: string, toUpper: boolean = true): string {
    if (toUpper) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }

  console.log(formatString('prince'));
  console.log(formatString('prince',true));
  console.log(formatString('prince', false));



  //Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.

  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
  }
  

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
  console.log(filterByRating(books));

  //Create a generic function that concatenates multiple arrays of the same type using rest parameters.

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }

  console.log(concatenateArrays(["a", "b"], ["c"]));        
console.log(concatenateArrays([1, 2], [3, 4], [5]));

//Create a Vehicle class with private make and year properties and a getInfo() method.Create a Car class extending Vehicle, adding a private model property and a getModel() method.


class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year); // Call the constructor of the parent class
      this.model = model;
    }
  
    getModel(): string {
      return `Model: ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  console.log(myCar.getInfo());   
  console.log(myCar.getModel());


  //Write a function that takes a string | number and returns:The length if it's a string The number multiplied by 2 if it's a number

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }
  
 
  console.log(processValue("hello")); 
  console.log(processValue(10));  


  //Define an interface Product and create a function to find the product with the highest price in an array. If the array is empty, return null.

  interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
    
    return products.reduce((mostExpensive, currentProduct) => {
      return currentProduct.price > mostExpensive.price ? currentProduct : mostExpensive;
    }, products[0]);
  }
  
  
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  console.log(getMostExpensiveProduct(products));


  //Define an enum Day for the days of the week.Create a function that returns "Weekday" or "Weekend" based on the input day.

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }
  console.log(getDayType(Day.Monday));  
console.log(getDayType(Day.Sunday));  

//Create an async function that:Returns the square of a number after 1 secondRejects if the number is negative

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000); // 1 second delay
  });
}
squareAsync(4).then(console.log);       
squareAsync(-3).catch(console.error);