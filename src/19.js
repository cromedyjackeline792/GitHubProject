function multiply(x, y) {
  if (y === 0) throw new Error("Divide by zero error");
  let result = x;
  while (y > 0) {
    if (y % 2 === 1) { // If the last bit is odd
      result *= x;
    } else {
      x *= x;
      y = Math.floor(y / 2);
    }
  }
  return result;
}

console.log(multiply(5, 3)); // Output: 15
