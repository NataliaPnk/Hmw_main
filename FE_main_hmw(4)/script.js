// TASK 1
// Задан массив elems, передающий элемент HTML разметки. 
// Реализуйте очистку данных по примеру ниже:
// let elems = [
// '<div><p class="text">Home</p></div>', 
// '<div><p class="text">About</p></div>', 
// '<div><p class="text">FAQ</p></div>', 
// '<div><p class="text">Contacts</p></div>' 
// ] 
// Результат: ['Home','About','FAQ','Contacts']


let elems = [
'<div><p class="text">Home</p></div>',
'<div><p class="text">About</p></div>', 
'<div><p class="text">FAQ</p></div>', 
'<div><p class="text">Contacts</p></div>' 
] 

let res = []
for(let elem of elems) { 
let start = elem.indexOf('">') +2
let end = elem.indexOf('</p>')
res.push(elem.slice(start, end))
}
console.log(res)


// TASK 2
// Напишите функцию initCap(array), которая получает 
// массив с элементами строкового значения и возвращает 
// элементы с заглавной первой буквой по примеру: 
// let words = ['стакан','молоко','табуретка','вода'] 

// Результат: ['Cтакан','Молоко','Табуретка','Вода']
 
function initCap(array) {
let res = []
for(let word of array){
let bigFirstLitera = word[0].toUpperCase() + word.slice(3)
res.push(bigFirstLitera) 
}
return res
}

let words = ['стакан','молоко','табуретка','вода'] 
console.log(initCap(words))


// TASK 3
// Задан массив names. 
// Сформируйте новый массив full_names, элементы 
// которого будут содежрать вложенный массив с именем и 
// фамилией. Если фамилии не окажется - второй элемент 
// должен хранить undefined 

// Пример: let names = [ 
// 'Steven King', 
// 'Jonh Snow', 
// 'Oliver', 
// 'Neena Stich',
//  'Grant Laster', 
// 'Persius Master', 
// 'Lest' 
// ] 

// Результат: [ 
// ['Steven','King'], 
// ['Jonh','Snow'], 
// ['Oliver', undefined], 
// ['Neena','Stich'], 
// ['Grant','Laster'], 
// ['Persius','Master'],
// ['Lest', undefined] ]



  let full_names = [ 
  'Ivan Ivanovich', 
  'Marian Keyes', 
  'Rachel', 
  'Elon Mask',
  'Keith Ferrazzi', 
  'Diana Narain', 
  'Michail' 
  ] 

  let res = []

for (let name of full_names) {
    let parts = name.split(' ') 
    if (parts.length === 2) { 
        res.push(parts) 
    } else if (parts.length === 1) { 
        res.push([parts[0], undefined]) 
    }
}

console.log(res)




