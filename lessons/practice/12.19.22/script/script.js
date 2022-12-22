// 1. Дан массив numbers. Создать новый массив и поместить в него все отрицательные числа из массива numbers

// let numbers = [3, 54, -1, 78, -13, -155];

// console.log(numbers.filter((value) => value < 0));

// 2.Сформировать новый массив из чисел, кончающихся на 3

// console.log(numbers.filter((value) => Math.abs(value % 10) == '3'));

// 3. Узнать количество положительных чисел в массиве

// console.log(numbers.filter((value) => value > 0).length);

//4. сформировать новый массив с числами, которые делятся на 5 без остатка

let numbers_2 = [12, 36, 15, 68, 45, 5, 60];

// console.log(numbers_2.filter((value) => value % 5 == 0));

//5. сформировать новый массив с числами, которые делятся на 3 и на 5 без остатка

// console.log(numbers_2.filter((value) => value % 5 == 0 && value % 3 == 0));

//6. Сформировать новый массив, в который попадут только строки длиннее 10 символов

// let greetings = ['hello', 'hi', 'good morning', 'good night', 'good afternoon'];

// console.log(greetings.filter((value) => value.length > 10));

//7. Сформировать новый массив с совершеннолетними юзерами

// let users = [
// 	['Ivan', 'Ivanov', 34],
// 	['Irina', 'Petrova', 13],
// 	['Olga', 'Sidorova', 23],
// 	['Anton', 'Orlov', 17],
// ];

// console.log(users.filter((value) => value[2] >= 18));

//8. Сформировать массив, в который попадут только числовые значения из массива array

// let array = ['hello', 15, true, 'hi', 177, 3];

// console.log(array.filter((value) => typeof value == 'number'));

//9. Сформировать новый массив с совершеннолетними юзерами

let fb_users = [
	{
		id: 1,
		name: 'Anton',
		age: 18,
	},
	{
		id: 2,
		name: 'Irina',
		age: 50,
	},
	{
		id: 3,
		name: 'Olga',
		age: 8,
	},
	{
		id: 4,
		name: 'Oleg',
		age: 90,
	},
];

console.log(fb_users.filter((value) => value.age >= 18));
