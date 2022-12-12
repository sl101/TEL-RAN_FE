const container = document.querySelector('.container');
const form = document.querySelector('.form');

form.addEventListener('submit', (evt) => {
	evt.preventDefault();
	const { type, content, color } = evt.target;

	const newTag = document.createElement(type.value);
	newTag.classList.add('newTag');
	newTag.innerText = content.value;
	newTag.style.backgroundColor = color.value;

	container.append(newTag);

	type.value = '';
	content.value = '';
	color.value = '';
});
