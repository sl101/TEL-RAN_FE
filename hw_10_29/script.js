// Напишите цикл for, который выводит числа в консоль от 0 до 10.
console.log(`===================\ntask_3...`);
for (let i = 0; i <= 10; i++) {
	console.log(`number = ${i}`);
}

// Напишите цикл for, который выводит числа в консоль от 0 до 10 c шагом 2.
console.log(`===================\ntask_4...`);
for (let i = 0; i <= 10; i++) {
	if (i % 2 === 0) console.log(`number = ${i}`);
}

// Напишите цикл for, который выводит числа в консоль от 5 до 10.
console.log(`===================\ntask_5...`);
for (let i = 5; i <= 10; i++) {
	console.log(`number = ${i}`);
}

// Напишите цикл for, который выводит числа в консоль от 10 до 0.
console.log(`===================\ntask_6...`);
for (let i = 10; i >= 0; i--) {
	console.log(`number = ${i}`);
}

// В программе заданы две переменные n и m с числовым значением каждая.
// Напишите цикл, который выводит в консоль числа от большего числа до меньшего,
console.log(`===================\ntask_7...`);
const n = 70;
const m = 50;
let min = 0;
let max = 0;

if (m > n) {
	max = m;
	min = n;
} else {
	max = n;
	min = m;
}

for (let i = max; i >= min; i--) {
	console.log(`number = ${i}`);
}

// В программе заданы две переменные n и m с числовым значением каждая.
// Число n больше числа m.
// Напишите цикл, который выводит в консоль все четные числа от m до n.
console.log(`===================\ntask_8...`);
const numN = 50;
const numM = 30;

for (let i = numM; i <= numN; i++) {
	if (i % 2 === 0) console.log(`number = ${i}`);
}

// В программе заданы две переменные n и m с числовым значением каждая.
// Напишите цикл, который считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
console.log(`===================\ntask_9...`);
const n_ = 2;
const m_ = 7;
let even = 0;
let odd = 0;
let min_ = 0;
let max_ = 0;

if (m_ > n_) {
	max_ = m_;
	min_ = n_;
} else {
	max_ = n_;
	min_ = m_;
}

for (let i = min_; i <= max_; i++) {
	if (i % 2 === 0) {
		even += i;
	} else {
		odd += i;
	}
}

console.log(`summ even numbers  = ${even}\nsumm odd numbers  = ${odd}`);

// В программе задана переменная n.
// Напишите программу,
// которая с помощью цикла считает сумму чисел от 1 до n и выводит в консоль.
console.log(`===================\ntask_10...`);
const varN = 55;
let summN = 0;
for (let i = 1; i <= varN; i++) {
	summN += i;
}
console.log(`summ = ${summN}`);
