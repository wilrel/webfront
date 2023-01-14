function minimal(a, b) {
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  } else if (a == b) {
    return a;
  }
  return minimal;
}

console.log(minimal(99, 99));

function power(a, b) {
  hasilkuadrat = a ** b
  return hasilkuadrat;
}
console.log(power(2, 2))