// const p_elem = document.querySelector('p');
// console.log('p_elem:\n', p_elem.innerHTML);

// p_elem.innerText = 'Hello!';
// =======================================

// const p_list = document.querySelectorAll('p');

// console.log('p_list:\n', p_list);

// for (let i = 0; i < p_list.length; i++) {
// 	console.log(p_list[i].innerHTML);
// 	console.log(p_list[i].innerText);
// }
// =====================================

// const p_info = document.querySelector('.info .info_text');
// console.log('innerText ' + p_info.innerText);
// console.log('innerHTML ' + p_info.innerHTML);

// =======================================
// const p_list = document.querySelectorAll('p');
// const array = [];

// for (let i = 0; i < p_list.length; i++) {
// 	array.push(p_list[i].innerText);
// }

// for (let i = 0; i < array.length; i++) {
// 	console.log(array[i]);
// }
// console.log(array);

// =======================================
// const p_info = document.querySelector('.info');
// const new_elem = document.createElement('p');
// new_elem.innerText = 'Привет! Я новый элемент';
// p_info.append(new_elem);

// =========================================
// const new_div = document.querySelector('div');
// new_div.innerText = 'Привет! Я новый div';
// p_info.append(new_div);

// ============================================
// const root_div = document.querySelector('#root');
// const array = ['Tretroller', 'Rollen', 'Fahrrad', 'Schlittschuh'];

// for (let i = 0; i < array.length; i++) {
// 	const new_elem = document.createElement('p');
// 	new_elem.innerText = array[i];
// 	root_div.append(new_elem);
// }

// ============================================
// const root_div = document.querySelector('#root');
// const array = ['Tretroller', 'Rollen', 'Fahrrad', 'Schlittschuh'];

// for (let i = 0; i < array.length; i++) {
// 	root_div.append(get_new_element(array[i]));
// }

// function get_new_element(word) {
// 	const new_el = document.createElement('p');
// 	new_el.innerText = word;
// 	return new_el;
// }
// =============================================
const root_div = document.querySelector('#root');
const array = [
	{
		title: 'велосипед',
		count: 3,
		price: 45000,
	},
	{
		title: 'самокат',
		count: 33,
		price: 45000,
	},
	{
		title: 'ролики',
		count: 13,
		price: 45000,
	},
	{
		title: 'скейт',
		count: 23,
		price: 45000,
	},
	{
		title: 'сноуборд',
		count: 5,
		price: 45000,
	},
];

for (let i = 0; i < array.length; i++) {
	root_div.append(get_new_element(array[i]));
}

function get_new_element(element) {
	const { title, count, price } = element;
	const container = document.createElement('div');
	const p_title = document.createElement('p');
	const p_count = document.createElement('p');
	const p_price = document.createElement('p');
	p_title.innerText = title;
	p_title.classList.add('title');
	p_count.innerText = count;
	p_count.classList.add('count');
	p_price.classList.add('price');
	p_price.innerText = price;
	container.append(p_title, p_count, p_price);
	return container;
}

const wrapper = document.createElement('div');
const par_1 = document.createElement('p');
par_1.innerText = 'Параграф номер 1';
const par_2 = document.createElement('p');
par_2.innerText = 'Параграф номер 2';
wrapper.append(par_1, par_2);
root_div.append(wrapper);
