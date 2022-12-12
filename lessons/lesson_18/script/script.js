// const goods = [
// 	{
// 		id: 1,
// 		title: 'Bike',
// 		price: 500,
// 		country: 'Ukraine',
// 	},
// 	{
// 		id: 2,
// 		title: 'Skate',
// 		price: 700,
// 		country: 'Germany',
// 	},
// 	{
// 		id: 3,
// 		title: 'Skies',
// 		price: 450,
// 		country: 'USA',
// 	},
// 	{
// 		id: 4,
// 		title: 'Ball',
// 		price: 100,
// 		country: 'Canada',
// 	},
// 	{
// 		id: 5,
// 		title: 'Sport clothes',
// 		price: 560,
// 		country: 'Barbados',
// 	},
// ];

// const container = document.querySelector('.container');

// goods.forEach(({ title, price, country }) => {
// 	const cart = document.createElement('div');
// 	const titleField = document.createElement('p');
// 	titleField.innerText = title;
// 	const priceField = document.createElement('p');
// 	priceField.innerText = `${price}$`;
// 	const countryField = document.createElement('p');
// 	countryField.innerText = country;
// 	cart.append(titleField, priceField, countryField);
// 	priceField.classList.add('price');
// 	cart.classList.add('cart');
// 	container.append(cart);
// });

// const loop = [1, 2, 3, 4, 5];

// loop.forEach(function (el, index, arr) {
// 	arr[index] *= 10;
// 	el *= 10;
// });
// console.log('loop: ', loop);

// let arr = ['Bob', 'Sem', 'Denis', 'Vania'];
// for (let element of arr) {
// 	console.log(element);
// }
// let sum = 0;

// arr.forEach((elem) => (sum += elem));

const image_one = document.querySelector('.image__one');
image_one.setAttribute('src', './media/bg/bg_20.jpg');
