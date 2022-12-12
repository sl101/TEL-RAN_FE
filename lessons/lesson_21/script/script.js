// const par = document.createElement('p');
// par.innerText = 'Hello world!';

// par.style.fontWeight = '700';
// par.style.cssText = 'color: red; font-style: italic;';
// par.style.fontSize = '18px';

// document.body.appendChild(par);
// =======================================================
const wrapper = document.querySelector('.container');

// for (let i = 0; i <= 255; i = i + 5) {
// 	const div = document.createElement('div');
// 	setStyles(div);
// 	div.onmouseover = () => {
// 		div.style.backgroundColor = `rgb(128, 128, ${i})`;
// 	};
// 	div.onmouseout = () => {
// 		div.style.backgroundColor = 'white';
// 	};
// 	wrapper.appendChild(div);
// }

// function setStyles(field) {
// 	field.style.width = '50px';
// 	field.style.height = '50px';
// 	field.style.border = '1px solid black';
// 	field.style.transition = 'all .4s ease';
// }
// ===============================================

// for (let i = 0; i <= 9; i++) {
// 	const div = document.createElement('div');
// div.classList.add("content");
// 	div.innerText = i;
// 	div.onclick = () => {
// 		if (div.classList[0] === 'active') {
// 			div.classList.remove('active');
// 		} else {
// 			div.classList.add('active');
// 		}
// 		// console.log(div.classList);
// 	};
// 	wrapper.appendChild(div);
// }
// ===============================================
const cards = [
	{
		en: 'door',
		ru: 'дверь',
	},
	{
		en: 'sofa',
		ru: 'диван',
	},
	{
		en: 'chair',
		ru: 'стул',
	},
	{
		en: 'stove',
		ru: 'плита',
	},
	{
		en: 'bag',
		ru: 'сумка',
	},
];

// for (let i = 0; i < cards.length; i++) {
// 	// console.log(cards);
// 	const div = document.createElement('div');
// 	const p = document.createElement('p');
// 	p.innerText = `${cards[i].en}`;

// 	div.onclick = () => {
// 		if (p.textContent == cards[i].ru) {
// 			p.innerText = cards[i].en;
// 		} else {
// 			p.innerText = cards[i].ru;
// 		}
// 	};

// 	div.appendChild(p);
// 	wrapper.appendChild(div);
// }

for (let i = 0; i < cards.length; i++) {
	const div = document.createElement('div');
	const p1 = document.createElement('p');
	const p2 = document.createElement('p');
	p1.innerText = cards[i].en;
	p1.classList.add('show');
	p2.innerText = cards[i].ru;
	p2.classList.add('hide');

	div.onclick = () => {
		if (p1.classList.contains('show')) {
			p1.classList.replace('show', 'hide');
			p2.classList.replace('hide', 'show');
		} else {
			p1.classList.replace('hide', 'show');
			p2.classList.replace('show', 'hide');
		}
	};

	div.append(p1, p2);
	wrapper.appendChild(div);
}
// ==============================================

const btn = document.createElement('button');

wrapper.appendChild(btn);

console.log(btn.classList.length);
