// ЗАДАЧА 1
const main = document.querySelector('.div');
const h2 = document.querySelector('h2');

const clickTarget = (e) => {
	if (e.target != h2) e.target.style.display = 'none';
};

main.onclick = (e) => clickTarget(e);

// ЗАДАЧА 2) Создайте приветственное сообщение на странице :

// 1) Получение имени пользователя в поле ввода

// 2) При нажатии кнопки добавьте событие, которое получит имя пользователя и создаст приветственное сообщение на странице.

// 3) Добавьте проверку, чтобы убедиться, что длина вводимых данных больше 1 символа.

const greating = document.querySelector('.hello');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const field = document.createElement('h3');
greating.append(field);

button.onclick = () => {
	field.innerText = input.value.length > 1 ? getMessage() : showError();
};

function getMessage() {
	field.style.color = 'black';
	const message = `Добро пожаловать ${input.value}`;
	return message;
}
function showError() {
	field.style.color = 'red';
	const message = `Длина имени должна быть более 3 символов`;
	return message;
}

// 4) создать 2 инпута и кнопку.

// По нажатию на кнопку во втором инпуте появится квадрат числа из первого инпута. Если введено не число - должна показаться ошибка.(в виде alert).
// Обратите внимание, что изменять значение во  втором input-е нельзя!

const inPut = document.querySelector('.input-in');
const outPut = document.querySelector('.input-out');
const btnSq = document.querySelector('.btn');

btnSq.onclick = () => {
	isNaN(inPut.value)
		? alert('Это не число')
		: (outPut.value = inPut.value ** 2);
};

// 5) В html добавлены 10 параграфов и одна кнопка.При нажатии на кнопку текст в каждом абзаце поменяется - спереди добавится порядковый номер абзаца.

const pars = document.querySelectorAll('.par');
const btnAdd = document.querySelector('.btnAdd');

btnAdd.addEventListener('click', addNumbers);

function addNumbers() {
	for (let index in pars) {
		pars[index].innerText = `${index}. ${pars[index].textContent}`;
	}
	btnAdd.removeEventListener('click', addNumbers);
}
