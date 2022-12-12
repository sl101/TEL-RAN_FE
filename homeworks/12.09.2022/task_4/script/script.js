const galleryList = document.querySelector('.gallery-list');

const picturesNumber = 17;

for (let i = 0; i < picturesNumber; i++) {
	const item = document.createElement('li');
	item.classList.add('item');

	const image = document.createElement('img');
	image.classList.add('image');
	image.setAttribute('src', `media/gallery/kuhe_${i + 1}.jpg`);

	item.append(image);
	galleryList.append(item);
}
