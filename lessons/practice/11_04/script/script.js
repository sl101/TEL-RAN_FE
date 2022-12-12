function showEachLetter(arg) {
	for (let i = 0; i < arg.length; i++) {
		console.log(arg[i]);
	}
}
function showAllEllements(arg) {
	for (let i = 0; i < arg.length; i++) {
		console.log(arg[i]);
	}
}
function showAllNegative(arg) {
	for (let i = 0; i < arg.length; i++) {
		if (arg[i] < 0) {
			console.log(arg[i]);
		}
	}
}
function showMaxEllement(arg) {
	let max = arg[0];
	for (let i = 1; i < arg.length; i++) {
		if (max < arg[i]) {
			max = arg[i];
		}
	}
	console.log('max: ', max);
}
function showMax(arg) {
	console.log('max: ', Math.max(...arg));
}
function showPositiveEven(arg) {
	for (let i = 0; i < arg.length; i++) {
		if (arg[i] > 0 && arg[i] % 2 == 0) {
			console.log(arg[i]);
		}
	}
}

// showEachLetter('Hello!');

let numbers = [1, 5, 88, 4, -20, -4, -57];
// showAllEllements(numbers);
// showAllNegative(numbers);
// showMaxEllement(numbers);
// showMax(numbers);
// showPositiveEven(numbers);
