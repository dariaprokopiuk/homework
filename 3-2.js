//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
function test(chislo1,chislo2) {
  if (chislo1 % chislo2 == 0) 
    console.log('делится без остатка');
    else 
      console.log('делится с остатком')
    }

test(16,5)
test(16,4)
