// SORT ============================================

// Задача. Отсортировать массив с товарами по значению id.

// const products = [
// 	{ id: 4, title: 'лыжи', price: 22000 },
// 	{ id: 2, title: 'самокат', price: 15000 },
// 	{ id: 1, title: 'велосипед', price: 45000 },
// 	{ id: 3, title: 'сноуборд', price: 20000 },
// ];

// products.sort((a, b) => a.id - .id);
// console.log('=> id', products);
// products.sort((a, b) => b.id - ab.id);
// console.log('<= id', products);

// function sumTwoSmalest(array) {
// 	let result = array.filter((value) => value > 0);
// 	console.log(result);
// 	if (result.length >= 1) {
// 		result.sort((a, b) => b - a);
// 		console.log(result);
// 		return result.length == 1 ? result[0] : result[0] + result[1];
// 	} else {
// 		return 'положительных чисел нет';
// 	}
// }
// console.log(sumTwoSmalest([-3, -2, -4, -1, -6, 7, 9]));

// REDUCE =============================================
const arr = [1, -2, -3, 4, 5, -6];

// Найти сумму всех чисел массива
const sumOfArr = arr.reduce((acum, value) => acum + value, 5);
// console.log(sumOfArr);

// Найти сумму позитивных чисел
let sumPositive = arr.reduce((acum, item) => {
	if (item > 0) {
		acum += item;
	}
	return acum;
}, 0);
// console.log(sumPositive);

// Используя метод reduce найти сумму четных чисел массива.
let sumEven = arr.reduce((acum, item) => {
	if (item % 2 == 0) return (acum += item);
	return acum;
}, 0);

// console.log(sumEven);

// Найти максимальное число в массиве
let maxItem = arr.reduce((acc, item) => (item > acc ? item : acc));
// console.log(maxItem);

//  =====================================

const array = [
	{ id: 1, price: 45000 },
	{ id: 2, price: 50000 },
	{ id: 3, price: 11000 },
	{ id: 4, price: 5000 },
];

let maxPrice = array.reduce((acum, item) =>
	item.price > acum.price ? item.price : acum
);
// console.log(maxPrice);

// Используя метод reduce найти объект товара с самой высокой ценой.
let maxObject = array.reduce((acc, item) =>
	item.price > acc.price ? item : acc
);
// console.log(maxObject);

// ================================================
const products = [
	{ id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5] },
	{ id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4] },
	{ id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3] },
	{ id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4] },
];

// products.forEach((el) => {
// 	el.sum_marks = el.marks.reduce((acc, item) => acc + item);
// 	delete el.marks;
// });

// console.log(products);

// Задача 5. Преобразовать массив из объектов, чтобы в итоге массив состоял из объектов со свойствами id, title, price, max_mark.

// products.forEach((el) => {
// 	el.max_marks = el.marks.reduce((acc, item) => (acc > item ? acc : item));
// 	delete el.marks;
// });
// console.log(products);

// Задача 6.
products.forEach((el) => {
	el.max_mark = el.marks.reduce((acc, item) => (acc > item ? acc : item));
	delete el.marks;
});
// console.log(products);

// ====================================================
// Практика
// ====================================================

const numbers = [3, 12, 87, 4, 0, 556, -9, -50];
// console.log('numbers', numbers);
// forEach ------
// numbers.forEach((el) => console.log(el));

// filter -----------
// console.log(numbers.filter((value) => value > 0));

// map --------------
// const mapEx = numbers.map((el) => el * 2);
// console.log('mapEx :>> ', mapEx);

const great = ['hello', 'hi'];
// const greatUp = great.map((el) => el.toUpperCase());
// console.log('greatUp', greatUp);

// task
// Сформировать новый массив. Если число положительное, умножить его на два. А если отрицательное, то оставить как есть.

// console.log(numbers.map((value) => (value > 0 ? value * 2 : value)));

// task
// Сформировать новый массив с теми же строками, но если строка длиннее 3 символов, то вернуть ее в верхнем регистре

// console.log(
// great.map((value) => (value.length >= 3 ? value.toUpperCase() : value))
// );

// task
// Дан массив random с разными типами данных. Сформировать новый массив, в который попадут только числовые значения из массива random

const random = [5, 'hello', 77, true, 12, false];
// const randomNumbers = random.filter((value) => typeof value == 'number');
// console.log(randomNumbers);

// task
// Сформировать новый массив. Если элемент число, то вернуть этот элемент. В ином случае - вернуть -1
const randomNum = random.map((value) =>
	typeof value == 'number' ? value : -1
);
console.log(randomNum);

// reduce ----------------
// const res = numbers.reduce((accum, item) => (accum += item));
// console.log('res :>> ', res);
