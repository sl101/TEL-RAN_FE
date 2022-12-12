// console.log('task_1\n', '===================');
// function range(n, m) {
// 	let start = n;
// 	let end = m;
// 	const array = [];
// 	if (n > m) {
// 		start = m;
// 		end = n;
// 	}

// 	for (let i = start; i <= end; i++) {
// 		array.push(i);
// 	}
// 	return array;
// }
// console.log(range(22, 42));

// console.log('task_2\n', '===================');
// function rangeTwo(n, m) {
// 	let start = n;
// 	let end = m;
// 	const array = [];
// 	if (n < m) {
// 		start = m;
// 		end = n;
// 	}
// 	for (let i = start; i >= end; i--) {
// 		array.push(i);
// 	}
// 	return array;
// }
// console.log(rangeTwo(52, 42));

// console.log('task_3\n', '===================');
// const list = [12, 3, 6, 8, -2, -15];
// let result = 0;
// for (let i = 0; i < list.length; i++) {
// 	result += list[i];
// }
// console.log('result: ', result);

// console.log('task_4\n', '===================');
// const array = [12, 3, 6, 8, -2, -15];
// let final = 0;
// for (let i = 0; i < array.length; i++) {
// 	if (array[i] > 0) final += list[i];
// }

// console.log('final: ', final);

// console.log('task_5\n', '===================');

// const arr = [22, 55, 7, 3, 9, 12, 5, 4];
// let even = 0;
// let odd = 0;
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] % 2 == 0) even += arr[i];
// 	else odd += arr[i];
// }
// const res = even - odd;
// console.log('res: ', res);

// console.log('task_6\n', '===================');
// const arr_6 = [22, 55, 7, 3, 9, 12, 5, 4];
// function task_6(array) {
// 	const obj = {
// 		max: max(array),
// 		min: min(array),
// 		avg: avg(array),
// 	};
// 	return obj;
// }
// function max(array) {
// 	let max = array[0];
// 	for (let i = 1; i < array.length; i++) {
// 		if (max < array[i]) max = array[i];
// 	}
// 	return max;
// }
// function min(array) {
// 	let min = array[0];
// 	for (let i = 1; i < array.length; i++) {
// 		if (min > array[i]) min = array[i];
// 	}
// 	return min;
// }
// function avg(array) {
// 	let sum = 0;
// 	for (let i = 0; i < array.length; i++) {
// 		sum += array[i];
// 	}
// 	return sum / array.length;
// }

// console.log(task_6(arr_6));

console.log('task_7...\n', '===================');
const array = [
	{
		id: 1,
		title: 'велосипед',
		price: 45000,
		discount: 10,
	},
	{
		id: 2,
		title: 'ролики',
		price: 15000,
		discount: 5,
	},
	{
		id: 3,
		title: 'самокат',
		price: 10000,
		discount: 30,
	},
	{
		id: 4,
		title: 'лыжи',
		price: 25000,
		discount: 20,
	},
	{
		id: 5,
		title: 'скейт',
		price: 10000,
		discount: 0,
	},
];

function getTitle(array) {
	for (let i = 0; i < array.length; i++) {
		console.log(array[i].title);
	}
}

function getMask(array) {
	for (let i = 0; i < array.length; i++) {
		const { title, price } = array[i];
		console.log(`${title} (${price})`);
	}
}

function getDiscount(array) {
	for (let i = 0; i < array.length; i++) {
		const { title, price, discount } = array[i];
		const newPrice = price - (price * discount) / 100;
		console.log(`${title} (${newPrice})`);
	}
}

function getPrices(array) {
	let result = 0;
	for (let i = 0; i < array.length; i++) {
		result += array[i].price;
	}
	console.log(`total prices: ${result}`);
}

// getTitle(array);
// getMask(array);
// getDiscount(array);
// getPrices(array);
