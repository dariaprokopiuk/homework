function test(number) {
  if (number > 0) {
    console.log("положительное");
    return;
  }
  if (number < 0) {
    console.log("отрицательное");
    return;
  }
  console.log("ноль");
}

test(7);
test(-10);
