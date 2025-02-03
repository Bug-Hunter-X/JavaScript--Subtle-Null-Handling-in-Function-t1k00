function foo(a, b) {
  if (!a || !b) {
    return 0; // Or handle it appropriately, e.g., throw an error
  }
  return a + b;
}

console.log(foo(null, 1)); // 0
console.log(foo(1, null)); // 0
console.log(foo(undefined, 1)); // 0
console.log(foo(1, undefined)); // 0
console.log(foo(1, 2)); // 3
console.log(foo(0,1)); // 1
console.log(foo(1,false)); // 1