// http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript/

console.log('=========\ntask_1 ');
let str = '#';
let i = 1;
do {
	console.log(str);
	str += '#';
	i++;
} while (i < 7);

console.log('=========\ntask_2 ');
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0) {
		console.log(`Fizz: ${i}`);
	} else if (i % 5 === 0) {
		console.log(`Buzz: ${i}`);
	}
}

console.log('=========\ntask_3 ');
for (let i = 0; i < 8; i++) {
	let start = 0;
	let field = '#';
	if (i % 2 !== 0) {
		field = ' ';
		start = 1;
	}
	for (let j = start; j < 7; j++) {
		if (j % 2 !== 0) {
			field += '#';
		} else {
			field += ' ';
		}
	}
	console.log(field);
}
console.log('=========\ntask_4 ');
const min = (a, b) => {
	let min = b;
	if (a < b) min = a;
	return min;
};
console.log('min = ' + min(-33, -11));

console.log('=========\ntask_5');
function isEven(params) {
	if (params === 0) return 'even';
	else if (params === 1) return 'odd';
	else if (params < 0) return isEven(-params);
	else return isEven(params - 2);
}
console.log('50: ' + isEven(50));
console.log('75: ' + isEven(75));
console.log('-1: ' + isEven(-1));

console.log('=========\ntask_6 ');
const string = 'hello';
const targetChar = 'l';

function countBs(string) {
	let count = 0;
	for (let i = 0; i < string.length - 1; i++) {
		if (string.charAt(i) === 'l') count++;
	}
	return count;
}

function countChar(string, symbol) {
	let count = 0;
	for (let i = 0; i < string.length - 1; i++) {
		if (string.charAt(i) === symbol) count++;
	}
	return count;
}

console.log('string length: ', string.length);
console.log('targetChar amount: ', countBs(string));
console.log('targetChar amount: ', countChar(string, targetChar));

console.log('=========\ntask_7 ');
