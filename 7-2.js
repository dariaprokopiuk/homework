// Дано некоторое число:`12345` Получите массив цифр этого числа.
let chislo = 12345
let arr = String(chislo).split('').map(Number)
console.log(arr)