const images = [
	'tully',
	'arryn',
	'baratheon',
	'greyjoy',
	'lannister',
	'stark',
	'tergaryen',
	'tyrell',
	'martell',
];

const sliderWrapper = document.querySelector('.slider__wrapper');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

let transform = 0;
const imgWidth = 400;
const gap = 20;
const wrapWidth = imgWidth * images.length + (images.length - 1) * gap;
sliderWrapper.style.width = `${wrapWidth}px`;

setWallPaper();
createSliderList();

function setWallPaper() {
	document.body.style.cssText = `background-image: url(media/wall/skin_texture.jpg);`;
}

function createSliderList() {
	for (let item of images) {
		const slide = document.createElement('li');
		slide.classList.add('slide');
		const img = document.createElement('img');
		img.classList.add('img');
		img.setAttribute('src', `media/carts/${item}.jpg`);

		const emblem = `${item[0].toUpperCase()}${item.slice(1)}`;
		img.setAttribute(
			'alt',
			`Emblem of the house ${emblem} from "Game of Thrones"`
		);
		slide.append(img);
		sliderWrapper.append(slide);
	}
}

btnNext.onclick = () => {
	transform = transform + imgWidth + gap;
	if (transform >= wrapWidth) {
		transform = 0;
	}
	sliderWrapper.style.transform = `translateX(-${transform}px)`;
};

btnPrev.onclick = () => {
	transform = transform - imgWidth - gap;
	if (transform < 0) {
		transform = wrapWidth - imgWidth;
	}
	sliderWrapper.style.transform = `translateX(-${transform}px)`;
};
