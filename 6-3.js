//Дан массив с числами. Найдите сумму положительных элементов этого массива.
function chisla(a, b, c) {
    let arr = []
    arr.push(a,b,c)
let result = arr.reduce((sum, current) => sum + (current > 0 ? current: 0), 0);
console.log(result)
}

chisla(3, -4, -8)