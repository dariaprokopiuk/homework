// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
function test(stroka) {
  if (stroka.length > 1) {
    console.log(stroka[stroka.length-2])
  }
  
}

test( 'poka')
test( 'ut')
