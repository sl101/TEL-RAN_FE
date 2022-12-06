// TASK 1 ======================================
const goods = [
	{
		title: 'BMW',

		price: '40000',

		count: '15',
	},

	{
		title: 'Toyota',

		price: '20000',

		count: '13',
	},

	{
		title: 'Ford',

		price: '30000',

		count: '20',
	},

	{
		title: 'Chevrolet',

		price: '60000',

		count: '9',
	},

	{
		title: 'Volkswagen',

		price: '30000',

		count: '13',
	},
];

for (let i = 0; i < goods.length; i++) {
	const { title, price, count } = goods[i];
	console.log(`${i + 1}. ${title} price:${price} count:${count}`);
}

// TASK 2 ===============================================
const body = document.querySelector('body');
const task_2 = document.createElement('div');
const root_field = document.createElement('ol');

let total_price = 0;
let total_count = 0;

for (let i = 0; i < goods.length; i++) {
	const { title, price, count } = goods[i];
	const item = document.createElement('li');
	item.innerText = `${title}\nprice:${price}\ncount:${count}`;
	root_field.appendChild(item);

	total_price += count * price;
	total_count += +count;
}
const total_field = document.createElement('p');
total_field.innerText = `=======\nTotal:\n${total_price}\n${total_count}`;

task_2.appendChild(root_field);
task_2.appendChild(total_field);
body.append(task_2);

// TASK 3 ===============================================
const table_title = ['No.', 'Full Name', 'Position', 'Salary'];

const table_array = [
	{
		id: 1,
		fullName: 'Bill Gates',
		position: 'Founder Microsoft',
		salary: '$1000',
	},

	{
		id: 2,
		fullName: 'Steve Jobs',
		position: 'Founder Apple',
		salary: '$1200',
	},

	{
		id: 3,
		fullName: 'Larry Page',
		position: 'Founder Google',
		salary: '$1100',
	},

	{
		id: 4,
		fullName: 'Mark Zuckerberg',
		position: 'Founder Facebook',
		salary: '$1300',
	},
];

const table = document.createElement('table');
const tr_title = document.createElement('tr');

for (let i = 0; i < table_title.length; i++) {
	const th = document.createElement('th');
	th.innerText = table_title[i];
	tr_title.append(th);
}
table.appendChild(tr_title);

// Вариант 1 =========================================
// for (let i = 0; i < table_array.length; i++) {
// 	const tr = document.createElement('tr');
// 	const { id, fullName, position, salary } = table_array[i];
// 	const td_id = document.createElement('td');
// 	td_id.innerText = id;
// 	const td_fullName = document.createElement('td');
// 	td_fullName.innerText = fullName;
// 	const td_position = document.createElement('td');
// 	td_position.innerText = position;
// 	const td_isalary = document.createElement('td');
// 	td_isalary.innerText = salary;
// 	tr.append(td_id);
// 	tr.append(td_fullName);
// 	tr.append(td_position);
// 	tr.append(td_isalary);
// 	table.appendChild(tr);
// }

// Вариант 2 =========================================
for (let i = 0; i < table_array.length; i++) {
	const objArray = Object.values(table_array[i]);
	const tr = document.createElement('tr');

	for (let j = 0; j < objArray.length; j++) {
		const td = document.createElement('td');
		td.innerText = objArray[j];
		tr.append(td);
	}

	table.appendChild(tr);
}

body.append(table);
