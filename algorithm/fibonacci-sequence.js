// 0 1
// 0 1 1
// 0 1 1 2
// 0 1 1 2 3
// 0 1 1 2 3 5
// 0 1 1 2 3 5 8
// 0 1 1 2 3 5 8 13

// fibonacciSequence sample data

// problem - give a number 'n', find the first 'n' elements of the Fibonacci sequence

function fibonacciSequence(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    console.log(i);
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log("func" + n, fib);
  return fib;
}

console.log(fibonacciSequence(1));
console.log(fibonacciSequence(2)); // [0, 1]
console.log(fibonacciSequence(3)); // [0, 1, 1]
