function sum(a, b) {
  if (a + b < 80 && a + b > 50) {
    return 65;
  } else {
    return 80;
  }
}
console.log(sum(34, 50));
console.log(sum(20, 12));
console.log(sum(30, 25));
