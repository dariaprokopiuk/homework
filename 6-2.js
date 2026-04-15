// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
function chisla(a, b, c) {
    let arr = []
    arr.push(a,b,c)
let result = arr.reduce((sum, current) => sum + Math.sqrt(current), 0);
console.log(result)
}

chisla(16, 25, 4)