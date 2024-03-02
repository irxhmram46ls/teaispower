// Helper function to calculate the square of a number
function square(number) {
    return number * number;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to generate a random number between min (inclusive) and max (inclusive)
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Main function to demonstrate the usage of helper functions
  function main() {
    console.log("Square of 5:", square(5)); // Output: 25
    console.log("Is 6 even?", isEven(6));   // Output: true
    console.log("Is 7 even?", isEven(7));   // Output: false
  
    // Generate and print 5 random numbers between 1 and 10
    console.log("Random numbers between 1 and 10:");
    for (let i = 0; i < 5; i++) {
      console.log(getRandomNumber(1, 10));
    }
  }
  
  // Call the main function
  main();