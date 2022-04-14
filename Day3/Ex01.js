function max(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > c && b > a) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}
console.log(max(2, 5, 1));
console.log(max(20, 8, 4));
console.log(max(30, 45, 100));
