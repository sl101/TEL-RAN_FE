// 1. Создать кнопку с размерами 30х30 пикс, при каждом нажатии на кнопку увеличивать высоту и ширину на 10 пикс

const btn = document.querySelector('.btn');
let btn_size = 70;

const incr_bnt_render = (size) => {
	btn.style.width = size + 10 + 'px';
	btn.style.height = size - 10 + 'px';
};

incr_bnt_render(btn_size);

btn.addEventListener('click', () => {
	btn_size += 10;
	incr_bnt_render(btn_size);
});

// 2. Создать кнопку, при клике на которую цвет кнопки меняется на случайный (Math.random())
const btnColor = document.querySelector('.btn-color');

const getColor = () => Math.round(Math.random() * 255);

btnColor.addEventListener('click', (evt) => {
	evt.target.style.backgroundColor = `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
});

// const a = Math.max(3, 155, 43, 2, 400); // 155
// const b = Math.min(3, 155, 43, 2); // 2

// const c = Math.ceil(4.28); // 5
// const d = Math.floor(4.28); // 4
// const e = Math.round(4.28); // 4

// console.log(c);
// console.log(d);
// console.log(e);

// 3. Вывести в консоль случайное целое число от 0 до 10
// console.log(Math.round(Math.random() * 10));

// 4. Вывести в консоль случайное целое число от 10 до 25
// console.log(Math.round(Math.random() * (25 - 10) + 10));

// 5. dice
const dice = document.querySelector('.btn-dice');
const parDice = document.querySelector('.par-dice');

dice.onclick = () => {
	parDice.innerText = `${randomSix()} x ${randomSix()}`;
};

randomSix = () => {
	return Math.round(Math.random() * 5 + 1);
};
