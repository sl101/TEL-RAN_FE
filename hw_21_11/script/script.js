const big_image = document.querySelector('.bottom__img');

const top_content = document.querySelector('.content__top');

const list = document.createElement('ul');
list.classList.add('list');
top_content.appendChild(list);

const image_array = [
	'media/ezhik.webp',
	'media/kapatuch.webp',
	'media/karuch.webp',
	'media/krosh.webp',
	'media/losiash.webp',
	'media/nusha.webp',
	'media/pin.webp',
	'media/sovunia.webp',
	'media/barash.webp',
];

for (let i = 0; i < image_array.length; i++) {
	const img_link = image_array[i];
	console.log(img_link);
	const item = document.createElement('li');
	item.classList.add('item');
	item.addEventListener('click', () => {
		big_image.src = img_link;
	});
	const img = document.createElement('img');
	img.classList.add('item__img');
	img.src = img_link;
	item.appendChild(img);
	list.appendChild(item);
}
