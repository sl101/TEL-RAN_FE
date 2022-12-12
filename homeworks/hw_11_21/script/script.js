const image_array = [
	'chiko',
	'barry',
	'carlin',
	'krash',
	'dokko',
	'rosa',
	'pin',
	'olga',
	'wally',
];

const top_content = document.querySelector('.content__top');
const list_content = document.createElement('ul');
list_content.classList.add('list');
top_content.appendChild(list_content);

const bottom_content = document.querySelector('.content__bottom');
const bottom_img = document.createElement('img');
bottom_img.classList.add('bottom__img');
bottom_content.appendChild(bottom_img);
setAttributes(bottom_img, image_array[0]);

for (let img_link of image_array) {
	const item = document.createElement('li');
	item.classList.add('item');
	item.onclick = () => setAttributes(bottom_img, img_link);

	const img = document.createElement('img');
	img.classList.add('item__img');
	setAttributes(img, img_link);

	item.appendChild(img);
	list_content.appendChild(item);
}

function setAttributes(image_content, img_link) {
	image_content.setAttribute('src', `media/${img_link}.webp`);
	image_content.setAttribute('alt', `Picture ${img_link}`);
	image_content.setAttribute('title', `${img_link}`);
}
