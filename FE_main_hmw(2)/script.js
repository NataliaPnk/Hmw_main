// TASK 1
// Напишите функцию checkEmail(string), которая 
// в качестве аргумента будет получать строковый тип. 
// Функция должна проверить, есть ли в строке символ “@” 
// и “.” Если оба символа будут находиться в строке - 
// функция должна вернуть true, в противном случае false

// 	Пример:
// 	let result1 = checkEmail(“some@email.com”)
// 	let result2 = checkEmail(“some@emailcom”)
// 	console.log(result1)
// console.log(result2)

// 	Результат: 
// 	true
// 	false


function checkEmail(string) {
  if (string.includes('@') && string.includes('.')){
        return true
    } else {
        return false
    }
}

let res = checkEmail('qwertyasd@gmail.com')
console.log(res)


// TASK 2
// Напишите функцию initCap(string), которая получает 
// строковое значение и возвращает эту же строку 
// с заглавной первой буквой по примеру: 

// Пример:
// 	let result1 = initCap(“sam”)
// 	let result1 = initCap(“steven”)
// 	console.log(result1)
// console.log(result2)

// 	Результат: 
// 	Sam
// Steven


function initCap(string) {
  return string[0].toUpperCase() + string.slice(1)
}

let res = initCap('alexey')
console.log(res)


// TASK 3
// Задан массив phones, передающий элемент HTML разметки. 
// Создайте функцию clearDataCards(array), которая будет 
// получать в качестве аргумента массив и реализует очистку 
// данных. Каждый номер карты нужно переопределить, заменив 
// первые и последние 4 цифры на звездочки
// по примеру ниже (должна вывести в консоль МАССИВ, 
//   а не элементы массива):

// let cards = [ 
// '4000 0012 0056 9499', 
// '4000 0013 5456 7379', 
// '4000 0014 1456 9869', 
// '4000 0015 3466 7859',
// '4000 0016 3556 6899', 
// '4000 0017 4456 4699' 
// ]

// clearDataCards(cards)

// Результат
//  [ 
// '****0012 0056****, 
// '****0013 5456****', 
// '****0014 1455****, 
// '****0015 3466****,
// '****0016 3556****, 
// '****0017 4456****’
// ]

function clearDataCards(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = '****' + array[i].slice(4, 8) + ' ' + array[i].slice(-4) + '****'
}
return array;
}

let cards = [ 
'4000 0012 0056 9499', 
'4000 0013 5456 7379', 
'4000 0014 1456 9869', 
'4000 0015 3466 7859',
'4000 0016 3556 6899', 
'4000 0017 4456 4699' 
]

console.log(clearDataCards(cards))


// TASK 4
// Задан массив elems, передающий элемент HTML разметки. 
// Создайте функцию clearData(array), которая 
// будет получать в качестве аргумента массив и 
// реализует очистку данных по примеру ниже 
// (должна вывести в консоль МАССИВ, 
// а не элементы массива):


// let elems = [
// '<div><p class="text">Home</p></div>', 
// '<div><p class="text">About</p></div>', 
// '<div><p class="text">FAQ</p></div>', 
// '<div><p class="text">Contacts</p></div>' 
// ] 

// clearData(array)

// 	Результат: ['Home','About','FAQ','Contacts']



function clearData(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
  let start = array[i].indexOf('">') + 1
  let end = array[i].indexOf('</p>')
  let text = array[i].substring(start, end)
  newArray.push(text);
}
return newArray;
}
let elems = [
  '<div><p class="text">Home</p></div>', 
  '<div><p class="text">About</p></div>', 
  '<div><p class="text">FAQ</p></div>', 
  '<div><p class="text">Contacts</p></div>' 
  ] 
  
  console.log(clearData(elems))