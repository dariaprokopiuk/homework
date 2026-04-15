//Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
function test(word){
let lastletter1 = word[word.length-1]
let lastletter2 = word[word.length-2]

    if (lastletter1 === 'ь') {
console.log(lastletter2)
}
else console.log(lastletter1)
}

test('привет')
test('мышь')