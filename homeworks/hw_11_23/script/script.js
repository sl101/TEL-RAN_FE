const container = document.querySelector('.container');

// 1)Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.

const task_1 = document.createElement('div');
const par_1 = document.createElement('p');
par_1.innerText =
	'Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript. Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.';
par_1.style.cssText =
	'max-width: 100%; min-height: 50px; padding: 10px 15px; border: 1px solid grey; border-radius: 5px; margin: 0 auto 25px; opacity: 1; transition: opacity .4s ease; box-shadow: inset 0 0 15px black, 0 0 0 3px white, 0 0 0 4px grey, 5px 5px 10px black;';
const btn_1 = document.createElement('button');
btn_1.innerText = 'Click on';
btn_1.style.cssText =
	'line-height: 30px; padding: 6px 30px; border: 1px solid black; border-radius: 5px; margin: 0 0 15px 15px; cursor: pointer; font: inherit; box-shadow: 5px 5px 15px black;';

btn_1.onclick = () => {
	par_1.style.opacity = par_1.style.opacity === '0' ? '1' : '0';
};

task_1.append(par_1, btn_1);
container.append(task_1);

// ---------------------------------------------------------------------

// 2)Создайте массив, содержащий названия цветов. На основе этого массива создайте список. При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет.
const task_2 = document.createElement('div');
const par_2 = document.createElement('p');
par_2.innerText =
	'Создайте массив, содержащий названия цветов. На основе этого массива создайте список. При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет.';
par_2.style.cssText =
	'max-width: 100%; min-height: 40px; padding: 0 15px; margin: 0 0 5px; color: white; cursor: default;';

const colors_array = [
	'seagreen',
	'salmon',
	'grey',
	'aquamarine',
	'purple',
	'teal',
	'tomato',
	'white',
];

const colors_list = document.createElement('ul');
colors_list.style.cssText = 'padding: 0 0 0 15px; margin: 0 0 30px;';

for (let item of colors_array) {
	const color_field = document.createElement('button');
	color_field.style.cssText = `display: inline-block; width: 60px; height: 60px; border: 1px solid black; border-radius: 5px; margin: 5px; cursor: pointer; box-shadow: 5px 5px 10px black;`;
	color_field.style.backgroundColor = item;

	color_field.onmouseover = () => {
		document.body.style.backgroundColor =
			document.body.style.backgroundColor === item ? 'white' : item;
	};

	colors_list.append(color_field);
}

task_2.append(par_2, colors_list);
container.append(task_2);

// ---------------------------------------------------------------------

// 3)Создайте массив с Вашими любимыми фильмами. Напишите цикл, который создает заголовки на основе этого массива. При клике на заголовок внизу появляется краткое описание данного фильма.

const films_array = [
	{
		title: 'Аватар',
		story:
			'Джейк Салли — бывший морской пехотинец, прикованный к инвалидному креслу. Несмотря на немощное тело, Джейк в душе по-прежнему остаётся воином. Он получает задание совершить путешествие в несколько световых лет к базе землян на планете Пандора, где корпорации добывают редкий минерал, имеющий огромное значение для выхода Земли из энергетического кризиса.',
	},
	{
		title: 'Волк с Уолл-стрит',
		story:
			'1987 год. Джордан Белфорт становится брокером в успешном инвестиционном банке. Вскоре банк закрывается после внезапного обвала индекса Доу-Джонса. По совету жены Терезы Джордан устраивается в небольшое заведение, занимающееся мелкими акциями. Его настойчивый стиль общения с клиентами и врождённая харизма быстро даёт свои плоды. Он знакомится с соседом по дому Донни, торговцем, который сразу находит общий язык с Джорданом и решает открыть с ним собственную фирму. В качестве сотрудников они нанимают нескольких друзей Белфорта, его отца Макса и называют компанию «Стрэттон Оукмонт». В свободное от работы время Джордан прожигает жизнь: лавирует от одной вечеринки к другой, вступает в сексуальные отношения с проститутками, употребляет множество наркотических препаратов, в том числе кокаин и кваалюд. Однажды наступает момент, когда быстрым обогащением Белфорта начинает интересоваться агент ФБР...',
	},
	{
		title: 'Человек-паук: Вдали от дома',
		story:
			'Питер Паркер вместе с одноклассниками отправляется на летние каникулы в Европу. Однако отдохнуть приятелям вряд ли удастся — по прибытии в Венецию группа попадает в эпицентр сражения. Некое существо, состоящее из воды, появляется из ниоткуда и начинает крушить всё на своём пути, и теперь Питеру придётся спасать европейские архитектурные памятники вместе с загадочным супергероем Мистерио.',
	},
	{
		title: 'Игра Престолов',
		story:
			'К концу подходит время благоденствия, и лето, длившееся почти десятилетие, угасает. Вокруг средоточия власти Семи Королевств, Железного трона, зреет заговор, и в это непростое время король решает искать поддержки у друга юности Эддарда Старка. В мире, где все — от короля до наёмника — рвутся к власти, плетут интриги и готовы вонзить нож в спину, есть место и благородству, состраданию и любви. Между тем, никто не замечает пробуждение тьмы из легенд далеко на Севере — и лишь Стена защищает живых к югу от неё.',
	},
];

const task_3 = document.createElement('div');
const films_list = document.createElement('ul');
films_list.style.cssText = 'padding: 0 0 0 15px; margin: 0 0 10px;';

for (let film of films_array) {
	const { title, story } = film;
	const title_field = document.createElement('h2');
	title_field.innerText = title;
	title_field.style.cssText =
		'display: inline-block; position: relative; z-index: 20; font-weight: 700; 	font-size: 24px; padding: 0; margin: 0 0 10px; cursor: pointer;';

	const story_field = document.createElement('p');
	story_field.classList.add('description');
	story_field.innerText = story;

	title_field.onclick = () => {
		story_field.classList.toggle('active');
	};

	films_list.append(title_field, story_field);
}

task_3.append(films_list);
container.append(task_3);

// ---------------------------------------------------------------------

// 4)Клавиатура на Вашем экране! Создайте кнопки(button) со всеми английскими буквами. Застилизуйте их так, чтобы на экране была копия клавиатуры (только английские буквы, цвета и размеры кнопок выбирайте на свой вкус).

// 5)Доработайте предыдущий скрипт так, чтобы при нажатии на кнопку ,сверху видеть буквы, на которые нажимает пользователь(имитация клавиатуры). Подсказка: можете использовать параграф.

const btn_array = "1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split('');

const task_4 = document.createElement('div');
const par_3 = document.createElement('p');
par_3.style.cssText =
	'max-width: 70%; min-height: 40px; background-color: white; padding: 5px 15px; margin: 0 auto 15px; border-radius: 5px; cursor: default;';
task_4.append(par_3);

const keyboard = document.createElement('ul');
keyboard.style.cssText =
	'position: relative; z-index: 20; display: flex; max-width: 513px; flex-wrap: wrap; gap: 3px; justify-content:center; margin: 0 auto';

for (let item of btn_array) {
	const btn_2 = document.createElement('button');
	btn_2.innerText = item;
	btn_2.style.cssText =
		'display: inline-blocl; width: 40px; height: 40px; text-align: center; line-height: 40px;cursor: pointer; background-color: #ddd; border: 1px solid black; border-radius: 5px; box-shadow: 2px 2px 5px black;';

	if (item === 'a') {
		btn_2.style.marginLeft = '5px';
	} else if (item === ' ') {
		btn_2.style.width = '212px';
		btn_2.style.marginRight = '40px';
	}
	btn_2.addEventListener('click', () => {
		par_3.innerText += item;
		if (item === ' ') {
			par_3.innerText = ' ';
		}
	});

	keyboard.append(btn_2);
}

task_4.append(keyboard);
container.append(task_4);
