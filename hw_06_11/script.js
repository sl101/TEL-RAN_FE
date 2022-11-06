// Напишите функцию, max_number, которая принимает два аргумента
// с числовым значением и возвращает большее значение.
console.log(`===================\ntask_13...`);
function max_number(num_1, num_2) {
	return Math.max(num_1, num_2);
}

console.log(max_number(100, 565));

// Напишите функцию, range, которая принимает два аргумента (n и m)
// с числовым значением и возвращает массив с числами от n до m -1.
console.log(`===================\ntask_14...`);
function range(n, m) {
	let instructions = increment;
	if (n > m) {
		instructions = decrement;
	}
	return instructions(n, m);
}

function decrement(n, m) {
	const array = [];
	for (let i = n; i >= m - 1; i--) {
		array.push(i);
	}
	return array;
}
function increment(n, m) {
	const array = [];
	for (let i = n; i <= m - 1; i++) {
		array.push(i);
	}
	return array;
}

console.log(range(33, 7));

// Напишите функцию, num_count,
// которая в качестве аргумента принимает целое число
// и возвращает количество цифр в этом числе.
console.log(`===================\ntask_15...`);

function num_count(number) {
	if (number >= 0) return number.toString().length;
	else return number.toString().length - 1;
}

console.log(num_count(-3311));

// Напишите функцию, get_hypotenuse,
// которая в качестве аргумента принимает два числа (длины катетов)
// и возвращает гипотенузу.
console.log(`===================\ntask_16...`);

function get_hypotenuse(leg_1, leg_2) {
	return Math.sqrt(leg_1 ** 2 + leg_2 ** 2);
}
console.log(get_hypotenuse(5, 3));
