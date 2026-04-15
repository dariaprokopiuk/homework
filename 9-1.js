//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
let arr = ["http://gotogo.com", "maal.com", "https://wer.ru"]
let result = arr.filter(str => str.startsWith("http://"))
console.log(result)

//filter - выполнения условия соответствия true
//startsWith - строка начинается
