//Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
function chisla(a, b, c) {
    let arr = []
    arr.push(a,b,c)
let result = arr.reduce((sum, current) => sum + (current > 0 && current < 10 ? current: 0), 0);
console.log(result)
}

chisla(3, -4, 2)
chisla(3, 8, 2)