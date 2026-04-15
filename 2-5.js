// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
function test(chislo1, chislo2) {
  if (chislo1[0] == chislo2[0]) {
      console.log('Цифры совпадают')
      } else {
        console.log('Цифры не совпадают')
      }
}

test('28645','47')
test('645','66666647')
