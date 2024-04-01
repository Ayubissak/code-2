// Function to check if a number is prime
function isPrime(num) {
    // Prime numbers are greater than 1
    if (num <= 1) return false;
    
    // Check if the number is divisible by any number up to its square root
    // If it is, then it's not a prime number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    // If no divisor was found, the number is prime
    return true;
}

// Function to filter prime numbers from an array
function filterPrimes(arr) {
    // Use the filter method to create a new array with only prime numbers
    return arr.filter(num => isPrime(num));
}
