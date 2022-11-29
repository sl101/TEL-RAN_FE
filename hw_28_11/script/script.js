// task 1 ========================================
const form = document.querySelector('#form');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');

const priceBtn = document.querySelector('.price-btn');
const priceField = document.querySelector('.price-field');

const productsList = document.createElement('ul');
document.body.append(productsList);

let products = [];

form.onsubmit = (e) => {
	e.preventDefault();
	products.unshift({
		title: titleInput.value,
		price: priceInput.value,
	});

	newProducts();

	titleInput.value = '';
	priceInput.value = '';
};

priceBtn.onclick = () => {
	let result = 0;
	for (let item of products) {
		result += +item.price;
	}
	priceField.innerText = result;
};

function createNode(item) {
	const { title, price } = item;
	const cart = document.createElement('li');
	cart.classList.add('cart');

	cart.ondblclick = () => {
		alert(`${title}\n${price}`);
	};

	const titleP = document.createElement('p');
	const priceP = document.createElement('p');

	titleP.innerText = title;
	priceP.innerText = price;

	cart.append(titleP, priceP);

	productsList.append(cart);
}

function newProducts() {
	productsList.innerHTML = '';
	for (let item of products) {
		createNode(item);
	}
}

// task 2 ========================================
const pswBtn = document.querySelector('.psw-btn');
const pswInput = document.querySelector('.psw-input');

pswBtn.onclick = (evt) => {
	evt.preventDefault();
	pswInput.type = pswInput.type === 'text' ? 'password' : 'text';
};
