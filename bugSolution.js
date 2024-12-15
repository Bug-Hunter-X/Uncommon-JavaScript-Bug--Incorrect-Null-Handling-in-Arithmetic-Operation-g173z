function foo(a, b) {
  const numA = a === null ? 0 : a; 
  const numB = b === null ? 0 : b; 
  return numA + numB; 
}
console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null));// Output: 0