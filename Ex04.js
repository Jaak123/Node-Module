function number(a) {
  if (a % 3 === 0 || a % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(number(9));
console.log(number(10));
console.log(number(21));
console.log(number(50));
