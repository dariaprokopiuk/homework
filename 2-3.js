//Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
function test(chislo) {
  console.log(+chislo[0] + +chislo[chislo.length-1]);
}

test('75')
test('17510')