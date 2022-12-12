// for (let i = 20; i <= 40; i += 3) {
// 	console.log('num', i);
// }
// ==========================
// for (let i = 40; i >= 20; i -= 4) {
// 	console.log('num', i);
// }
// ==========================
// const arr = [12, -4, 32, -23, 4, -3, 5, 43];

// for (let i = 0; i < arr.length; i++) {
// 	console.log('i = ', arr[i]);
// }
// ==========================
// const arr = [12, -4, 32, -23, 4, -3, 5, 43];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0) console.log('i = ', arr[i]);
// }

// ================================
// const arr = [12, -4, 32, -23, 4, -3, 5, 43];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] < 0) arr[i] *= -1;
// }
// console.log(...arr);

// =====================================
// function fixFnc(variable) {
// 	const message = variable;

// 	function startInner(target) {
// 		console.log(message + target);
// 	}

// 	return startInner;
// }

// const greating = fixFnc('Hello ');
// greating('Slava');

// ======================================
// const user = {
// 	name: 'Slava',
// 	age: 48,
// 	height: 179,
// };
// console.log(user['age']);
// // const { name, age, height } = { ...user };
// console.log(user.name);

// user.name = 'Bob Marley';
// user.gender = 'm';

// console.log(user.name);
// console.log(user.gender);

// =========================================
const product = {
	name: '13',
	price: 1.2,
};

const { name: newName } = product;

console.log('newName: ', newName);
// console.log(product.name);
// console.log(typeof product.name);
// console.log(typeof product);
// console.log(product.price);

// ====================================

const products = [
	{
		id: 1,
		title: 'Bike',
		price: 10000,
		discount: 25,
	},
	{
		id: 2,
		title: 'Sky',
		price: 30000,
		discount: 20,
	},
	{
		id: 3,
		title: 'Rolley',
		price: 20001,
		discount: 10,
	},
];

// console.log('products\n', ...products);
// let length = 0;
// for (let i = 0; i < products.length; i++) {
// 	if (products[i].title.length > length) length = products[i].title.length + 1;
// }

// for (let i = 0; i < products.length; i++) {
// 	const { title, price, discount } = products[i];
// let spaces = '';
// const spaceNum = length - title.length;
// for (let j = 0; j < spaceNum; j++) {
// 	spaces += ' ';
// }
// discount_price = price - (price * discount) / 100;
// console.log(
// `${title}:\nold price $${price}\nprice with discount $${discount_price};`
// );
// }

// const result = [];
// for (let i = 0; i < products.length; i++) {
// 	const { title, price, discount } = products[i];

// if (discount > 12) result.push(title);
// if (discount > 12) result.push(products[i]);
// if (price > 20000) console.log(`${title} ${price}`);
// }
// console.log('result: ', ...result);
