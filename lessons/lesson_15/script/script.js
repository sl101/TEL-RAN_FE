function power(value, power = 2) {
	result = value ** power;
	return result;
}

// console.log('result: ', power(12, 2));

function compare(num1, num2) {
	if (num1 > num2) return num1;
	return num2;
}

// console.log('compare: ', compare(22, 22));

function range(number) {
	const arr = [];
	for (let i = 0; i < number; i++) {
		arr.push(i);
	}
	return arr;
}

// console.log('range: ', range(5));

const array = [22, 44, 5, 7, 99, 0];

for (let i = 0; i < 10; i++) {
	// console.log('i = ', i);
	// console.log('array[i] = ', array[i]);
}

for (let i = 0; i <= 10; i++) {
	console.log('i * i = ', i ** 2);
}
