// Дано некоторое число:`12345` Переверните его: `54321`
let chislo = 12345
let arr = String(chislo).split('').map(Number).reverse().join('')
console.log(arr)