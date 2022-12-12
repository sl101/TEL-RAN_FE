// const btn = document.querySelector('button');
// const text_container = document.querySelector('.text__container');

// const create_text = () => {
// 	const text = document.createElement('p');
// 	text.innerText = 'hello!';
// 	text_container.appendChild(text);
// };

// btn.addEventListener('click', create_text);

// task_1 =================================
// const btn = document.querySelector('.add_text_btn');
// const hello_text = document.querySelector('.hello_text');

// btn.addEventListener('click', () => {
// 	document.body.style.backgroundColor = 'black';
// });
// task 2 ========================================

// ДЗ:
// 1. При клике на кнопку выводится сообщение 'hello' в консоль
// 2. При клике на кнопку меняется цвет заднего фона у параграфа
// 3. При клике на кнопку цвет фона меняется на черный, а при следующем клике меняется на белый

// 1 =================================
const hello_btn = document.querySelector('.btn-hello');
hello_btn.onclick = () => console.log('Hello!');

// 2 =================================
const color_btn = document.querySelector('.btn-color');
const p = document.querySelector('.text');
color_btn.onclick = () => {
	var randomColor = Math.floor(Math.random() * 16777215).toString(16);
	// console.log(randomColor);
	// p.classList.toggle('active');
	p.style.backgroundColor = `#${randomColor}`;
};

// 3 =================================
const page_btn = document.querySelector('.btn-page');
page_btn.onclick = () => {
	page_btn.classList.toggle('active');
	document.body.classList.toggle('active');
};
// 4 =============================
const btn_input = document.querySelector('.btn-input');
const input = document.querySelector('input');
btn_input.onclick = () => {
	console.log(input.value);
};

// 5 =============================
const btn_text = document.querySelector('.btn-input__show');
const input_text = document.querySelector('.input_text');
btn_text.onclick = () => {
	input_text.value = '!!!';
};

// 6 =============================
const btn_password = document.querySelector('.btn-password');
const input_password = document.querySelector('.input-password');
btn_password.onclick = () => {
	input_password.type =
		input_password.type === 'password' ? 'text' : 'password';
};
