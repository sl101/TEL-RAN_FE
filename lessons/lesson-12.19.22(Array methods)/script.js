// let array = [1, 2, 3, 4, 5, 6];
// let result = array.filter((value) => value < 4 );

// console.log(result);

// Задача 1 -------------------------------------------
// Отфильтровать элементы таким образом, чтобы получить новый массив, который содержит только булевый тип данных
// пример:
// let array = [
// 	true,
// 	false,
// 	'12',
// 	0,
// 	true,
// 	'string',
// 	[1, 2, 3],
// 	{ name: 'tigran' },
// ];
// Результат:
// [true,false,true]

// let result = array.filter((value) => typeof value === 'object');
// let result = array.filter((value) => typeof value == 'boolean');

// console.log(result);

// Задача 2 -------------------------------------
// Отфильтровать значения по условию - первая буква строки должна быть "А"
// Пример:
let array_2 = ['Арбуз', 'Антена', 'Бор', 'Арбуз', 'Сеть', 'Трон'];

// Результат:
// ['Арбуз','Антена','Арбуз']

// let result_2 = array_2.filter((value) => value.startsWith == 'А');
// let result_2 = array_2.filter((value) => value[0] == 'А');
// let result_2 = array_2.filter((value) => value.charAt(0) == 'А');
// console.log(result_2);

console.log(array_2.filter((value) => value.at(0) == 'А'));
