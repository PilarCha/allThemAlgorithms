const fib = (n) => {
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

console.log(fib(6));
console.log(fib(8));
console.log(fib(13));
//gets stuck here
console.log(fib(80));

//time is 0(n);
//space is 0(n);
