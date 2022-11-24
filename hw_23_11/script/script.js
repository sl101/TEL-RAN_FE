const container = document.querySelector('.container');
const task_1 = document.createElement('div');

// 1)Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.
// ---------------------------------------------------------------------
const par_1 = document.createElement('p');
par_1.innerText =
	'Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript. Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.';
par_1.style.cssText =
	'max-width: 100%; min-height: 60px; padding: 5px 15px; border: 1px solid black; border-radius: 5px; margin: 0 auto 25px; opacity: 1; transition: opacity .4s ease;';
const btn_1 = document.createElement('button');
btn_1.innerText = 'Click on';
btn_1.style.cssText =
	'line-height: 30px; padding: 6px 30px; border: 1px solid black; border-radius: 5px; margin: 0 auto 40px; cursor: pointer; font: inherit; box-shadow: 5px 5px 15px black';

btn_1.onclick = () => {
	par_1.style.opacity = par_1.style.opacity === '0' ? '1' : '0';
};

task_1.append(par_1, btn_1);
container.append(task_1);

// 2)Создайте массив, содержащий названия цветов. На основе этого массива создайте список. При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет.
const task_2 = document.createElement('div');
const colors_list = [
	'seagreen',
	'salmon',
	'grey',
	'aquamarine',
	'purple',
	'teal',
	'tomato',
];

const list_ul = document.createElement('ul');

for (let item of colors_list) {
	const color_field = document.createElement('div');
	color_field.style.cssText = `display: inline-block; width: 60px; height: 60px; border: 1px solid black; border-radius: 5px; margin: 5px; cursor: pointer;`;
	color_field.style.backgroundColor = item;

	color_field.onclick = () => {
		document.body.style.backgroundColor =
			document.body.style.backgroundColor === item ? 'white' : item;
	};

	task_2.append(color_field);
	container.append(task_2);
}

// 3)Создайте массив с Вашими любимыми фильмами. Напишите цикл, который создает заголовки на основе этого массива. При клике на заголовок внизу появляется краткое описание данного фильма.

// 4)Клавиатура на Вашем экране! Создайте кнопки(button) со всеми английскими буквами. Застилизуйте их так, чтобы на экране была копия клавиатуры (только английские буквы, цвета и размеры кнопок выбирайте на свой вкус).
// 5)Доработайте предыдущий скрипт так, чтобы при нажатии на кнопку ,сверху видеть буквы, на которые нажимает пользователь(имитация клавиатуры). Подсказка: можете использовать параграф.
