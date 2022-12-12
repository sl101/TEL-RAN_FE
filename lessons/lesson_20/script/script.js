// const btn = document.createElement('button');
// btn.innerText = 'hit me';
// document.body.appendChild(btn);

// btn.onclick = function () {
// 	console.log('hit');
// };
// ===============================================
// const btn_increnment = document.createElement('button');
// btn_increnment.innerText = '+';

// const btn_decrement = document.createElement('button');
// btn_decrement.innerText = '-';

// document.body.appendChild(btn_increnment);
// document.body.appendChild(btn_decrement);

// const p_field = document.createElement('p');
// p_field.innerText = 1;
// document.body.appendChild(p_field);

// btn_increnment.onclick = function () {
// 	p_field.innerText = +p_field.textContent * 2;
// };

// btn_decrement.addEventListener('click', (event) => {
// 	p_field.innerText = +p_field.textContent / 2;
// 	console.log('event: ', event.target);
// });
// =============================================

// const introduce = document.createElement('p');
// document.body.appendChild(introduce);

// window.addEventListener('keypress', (event) => {
// 	introduce.innerText = introduce.textContent + event.key;
// console.log('event', event.key);
// });
// ===========================================

const strings = [
	'This is some text',
	'You can use event listener',
	'Future frontend developer',
	'Never give up',
];

for (let string of strings) {
	const field = document.createElement('p');
	field.innerText = string;
	document.body.appendChild(field);
	field.onclick = function () {
		field.innerText = '';
		for (let i = 0; i < string.length; i++) {
			field.innerText = field.textContent + '*';
		}
	};
}
function putStars() {}
