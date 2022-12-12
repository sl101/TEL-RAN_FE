// task_1 ===================================
// const name = prompt('What is your name');
// console.log(`Hello ${name}`);

// task_2 ===================================
// const a = +prompt('Enter first number');
// const b = prompt('Enter second number');
// console.log(typeof a);
// console.log(typeof 0);

// console.log(`a + b = ${a + b}`);
// console.log(`a - b = ${a - b}`);
// console.log(`a * b = ${a * b}`);
// if (b != 0) {
// 	console.log(`a / b = ${a / b}`);
// } else {
// 	console.log(`Can't divide by zero`);
// }

// task_2_1 ===================================
// if (a > 0) console.log('a > 0');
// else if (a < 0) console.log('a < 0');
// else if (a == 0) console.log('a = 0');
// else {
// 	console.log('error');
// }
// debugger;

// task_3 ===================================
// if ((a % 4 === 0 && a % 100 !== 0) || 0 === a % 400) {
// 	console.log('Високосный');
// } else console.log('Не високосный');

// task_4 ===================================
// const arr = [12, 34, 56, 2, 65];
// console.log(arr[2]);
// arr[2] = 'test';
// console.log(arr);
// arr.push(-15);
// console.log(arr);

// task_5 ===================================
const arr = [12, 34, 56, 2];
console.log(arr);
arr[2] = -13;
console.log(arr);
arr.push(0, 6);
// arr.push(6);
console.log(arr);
arr[4] = -arr[4];
console.log(arr);
