const form = document.querySelector('#form');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');

const form2 = document.querySelector('#form_2');
const filterInput = document.querySelector('#filter');

const sortBtn = document.querySelector('#sort-price');

const productsList = document.createElement('ul');
document.body.append(productsList);

const titleField = document.createElement('h2');
titleField.innerText = 'Нет товаров...';
titleField.style.cssText = 'text-align: center';
productsList.append(titleField);

let products = [];

form.onsubmit = (e) => {
	e.preventDefault();

	const title = titleInput.value.toLowerCase();

	products.unshift({
		title: title,
		price: priceInput.value,
	});

	newProducts(products);

	titleInput.value = '';
	priceInput.value = '';
};

function createNode(index, title, price) {
	const cart = document.createElement('li');
	cart.classList.add('cart');

	const titleP = document.createElement('p');
	const priceP = document.createElement('p');

	titleP.innerText = title;
	priceP.innerText = price;

	const close = closeBtn();

	cart.append(titleP, priceP, close);
	productsList.append(cart);

	close.onclick = () => {
		close.removeEventListener('dblclick', () => {
			alert(`${title}\n${price}`);
		});
		productsList.removeChild(cart);
		let result = [];
		if (products.length > 1) {
			for (let i = 0; i < products.length; i++) {
				if (i !== index) result.push(products[i]);
			}
		}
		products = result;
		if (!products.length) {
			productsList.append(titleField);
		}
	};

	cart.onmouseover = () => {
		close.style.opacity = '1';
	};

	cart.onmouseleave = () => {
		close.style.opacity = '0';
	};

	cart.ondblclick = () => {
		alert(`${title}\n${price}`);
	};
}

function newProducts(array) {
	productsList.innerHTML = '';
	for (let i = 0; i < array.length; i++) {
		createNode(i, array[i].title, array[i].price);
	}
}

function closeBtn() {
	const btn = document.createElement('button');

	btn.classList.add('close-btn');
	btn.innerText = 'X';

	return btn;
}

form2.onsubmit = (e) => {
	e.preventDefault();
	const filter = filterInput.value.toLowerCase();
	const filteredTitles = [];

	for (let i = 0; i < products.length; i++) {
		if (filter === products[i].title) {
			filteredTitles.push(products[i]);
		}
	}

	newProducts(filteredTitles);
};

sortBtn.onclick = () => {
	products.sort((a, b) => a.price - b.price);
	newProducts(products);
};
