//Дан массив с числами. Найдите сумму квадратов элементов этого массива.
function chisla(a, b, c) {
    let arr = []
    arr.push(a,b,c)
let result = arr.reduce((sum, current)=> sum + current * current, 0);
console.log(result)
}

chisla(5, 2, 6)