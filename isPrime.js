/* 
Q4. Write a program in JS to check whether a number is prime or not?
*/

function isPrime(n) {
    if (n < 2 ) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
}

const ans = isPrime(29);
ans ? console.log('It is a prime number') : console.log('not prime');