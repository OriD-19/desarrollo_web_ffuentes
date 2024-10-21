console.log('functions');

cache = {};

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci_memo(n) {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];

    res = fibonacci_memo(n - 1) + fibonacci_memo(n - 2);
    cache[n] = res;

    return res;
}

console.log(fibonacci_memo(100));
console.log(fibonacci_memo(50));
console.log(fibonacci_memo(10));


const numeros = [1, 2, 3, 4, 5, 6]

console.log(numeros
            .filter(x => x % 2 === 0)
            .reduce((acc, x) => acc + x, 0));
