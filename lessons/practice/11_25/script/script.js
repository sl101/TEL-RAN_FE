// 1)Даны картинки в виде массива. Напишите цикл, который создает картинки на основе этого массива. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src.

const container = document.querySelector('.container');

const img_array = [
	'https://www.gorilladoctors.org/wp-content/uploads/2014/10/empowering2-300x300.jpg',
	'https://i.pinimg.com/originals/7f/a1/0f/7fa10fdd13baa44a73f0a77ed32e8566.jpg',
	'https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953.jpg',
	'https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-03.jpg',
];

const img_list = document.createElement('ul');
img_list.style.cssText =
	'display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 20px;';

for (let img of img_array) {
	const item = document.createElement('img');
	item.setAttribute('src', img);

	item.onclick = () => {
		alert(img);
	};

	img_list.appendChild(item);
}
container.append(img_list);

// ====================================================================
// 2) Даны числа в виде массива.Напишите функцию ,которая создает параграфы на основе этого массива. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.

let nums = [2, 3, 4, 5, 6];

function createP(array) {
	const nums_list = document.createElement('ul');
	nums_list.style.cssText =
		'display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 5px 20px; list-style: none;';

	for (const item of array) {
		const item_field = document.createElement('li');
		item_field.style.cssText =
			'width: 50%; display: flex; align-items: center; justify-content: center; padding: 10px 15px; margin-bottom: 10px; background-color: #a0eded; border-radius: 4px;';

		const incr = document.createElement('button');
		incr.innerText = '+';
		incr.style.cssText = 'width:30px; height: 30px; cursor: pointer;';
		const decr = document.createElement('button');
		decr.innerText = '-';
		decr.style.cssText = 'width:30px; height: 30px; cursor: pointer;';

		const par_1 = document.createElement('p');
		par_1.innerText = item;
		par_1.style.cssText = 'text-align: center; cursor: pointer; margin: 0 20px';

		par_1.onclick = () => {
			par_1.innerText = Math.pow(par_1.textContent, 2);
		};

		incr.onclick = () => {
			par_1.innerText = +par_1.textContent + 1;
		};
		decr.onclick = () => {
			par_1.innerText = par_1.textContent - 1;
		};

		item_field.append(incr, par_1, decr);
		nums_list.appendChild(item_field);
	}

	container.appendChild(nums_list);
}

createP(nums);

// ======================================================================
// 5) У нас есть кнопка в html документе. С помощью скриптов сделайте след. логику:
// 1)добавьте 3 event listener-а на кнопку, которые выводят на экран 1,2,3. (первая функция выводит цифру 1, вторая - 2, и последняя 3),
// 2) Пусть при первом клике на кнопку сработают все 3 функции и при этом func1 и func2 отвяжутся от элемента. И при следующих кликах будет срабатывать только функция func3, которую мы не отвязываем.

const btn_1 = document.createElement('button');
btn_1.innerText = 'start';
const btn_2 = document.createElement('button');
btn_2.innerText = 'stop';
const p = document.createElement('p');
container.append(btn_1, btn_2, p);

btn_1.addEventListener('click', () => {
	document.addEventListener('mousemove', move);
});
btn_2.addEventListener('click', () => {
	document.removeEventListener('mousemove', move);
});

function move(event) {
	p.innerText = `x:${event.pageX}\ny:${event.pageY}`;
}
