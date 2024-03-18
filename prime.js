//sum of prime numbers

let sum = 0;

for (let i = 2; i <= 100; i++){
    let isPrime = true;
    for(a = 2; a <= Math.sqrt(i); a++){
        if (i % a ===0){
            isPrime = false;
            break;
        }
    }
        if (isPrime) {
            sum += i
        }
    }

console.log(sum);