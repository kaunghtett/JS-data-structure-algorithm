// problem - give an integer 'n' , find the factorial of that integer

function factorialNumber(n) {
  let factorial = 1;

  for (let i = 2; i <= n; i++) {
    console.log(i);
    factorial *= i;

    console.log("factorial", factorial);
  }

  return factorial;
}

console.log(factorialNumber(4));
