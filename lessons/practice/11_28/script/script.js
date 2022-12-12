const user_form = document.querySelector('.user_form');
const click = document.querySelector('.click');

user_form.addEventListener('submit', (event) => {
	event.preventDefault();
	// const first_name = event.target.firstName.value;
	// const last_name = event.target.lastName.value;

	const { firstName, lastName } = event.target;

	console.log(event.target);

	const user_card = document.createElement('div');
	const firstNameElement = document.createElement('p');
	firstNameElement.innerText = `First name: ${firstName.value}`;
	const lastNameElement = document.createElement('p');
	lastNameElement.innerText = `Last name: ${lastName.value}`;
	user_card.append(firstNameElement, lastNameElement);
	document.body.append(user_card);

	firstName.value = '';
	lastName.value = '';
});

// click.addEventListener('click', (event) => {
// 	console.log(event.target);
// });
