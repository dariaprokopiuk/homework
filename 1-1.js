function test(chislo) {
  if (chislo > 0) {
    console.log("положительное");
    return;
  }
  if (chislo < 0) {
    console.log("отрицательное");
    return;
  }
  console.log("ноль");
}

test(7);
test(-10);
