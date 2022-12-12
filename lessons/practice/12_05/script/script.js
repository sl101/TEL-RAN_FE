const images = [
	'https://cdnn21.img.ria.ru/images/155666/00/1556660022_36:0:2767:2048_1920x0_80_0_0_0f95880a02fc9e226884ce632677e009.jpg',
	'https://n1s1.hsmedia.ru/bc/a3/fe/bca3fe6f32ac44ec9af8520490d26be2/1920x1152_0xac120003_15211652711625304484.jpg',
	'https://bigenc.ru/media/2016/10/27/1235177203/11340.jpg',
	'https://vot-enot.com/wp-content/uploads/2021/11/94895c23dcc1cf7.jpg',
];

const imgSlider = document.querySelector('.img-slider');

imgSlider.addEventListener('click', (evt) => {
	evt.target.src = images[countIncrement() % images.length];
});

let countIncrement = increment();

function increment() {
	let number = 0;
	return function (num) {
		if (number >= num) {
			return (number = 0);
		} else {
			return ++number;
		}
	};
}
// ==============================================================
let count = 0;

const imgTwo = document.querySelector('.slider-two');

const prevBtn = document.querySelector('.prev');
prevBtn.addEventListener('click', () => {
	if (count == 0) {
		count = images.length;
		// imgTwo.src = images[images.length - Math.abs(--count)];
	}
	imgTwo.src = images[--count % images.length];
});

const nextBtn = document.querySelector('.next');
nextBtn.addEventListener('click', () => {
	imgTwo.src = images[++count % images.length];
});
