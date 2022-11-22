const big_image = document.querySelector('.bottom__img');

const top_content = document.querySelector('.content__top');
const list = document.createElement('ul');
list.classList.add('list');
top_content.appendChild(list);

const bottom_content = document.querySelector('.content__bottom');
const bottom_img = document.createElement('img');
bottom_img.classList.add('bottom__img');
bottom_content.appendChild(bottom_img);

const image_array = [
	'ezhik',
	'kapatuch',
	'karuch',
	'krosh',
	'losiash',
	'nusha',
	'pin',
	'sovunia',
	'barash',
];

bottom_img.src = `media/${image_array[0]}.webp`;
bottom_img.setAttribute.alt = `Picture ${image_array[0]}`;

for (let i = 0; i < image_array.length; i++) {
	const img_link = image_array[i];
	console.log(img_link);
	const item = document.createElement('li');
	item.classList.add('item');
	item.addEventListener('click', () => {
		bottom_img.src = `media/${img_link}.webp`;
	});
	const img = document.createElement('img');
	img.classList.add('item__img');
	img.src = `media/${img_link}.webp`;
	img.alt = `Picture ${img_link}`;
	item.appendChild(img);
	list.appendChild(item);
}
