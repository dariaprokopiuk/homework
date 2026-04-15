//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
let arr = ['wwww.html', 'qawshtml', 'ytry']
let result = arr.filter(str => str.endsWith(".html"))
console.log(result)

//endsWith - заканчивается строка