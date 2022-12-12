// const table = document.querySelector('#age-table');
// const labels = table.querySelectorAll('label');
// const targetTD = table.querySelector('td');

// const targetForm = document.querySelector('.search');

// const inputs = document.querySelectorAll('input');
// const firstInput = inputs[0];
// const lastInput = inputs[inputs.length - 1];

// const lastInput2 = targetForm.querySelector('form > input:last-child');

// console.log('table ', table);
// console.log('labels ', labels.length);
// console.log('targetTD ', targetTD.innerText);
// console.log('targetForm ', targetForm);
// console.log('firstInput ', firstInput);
// console.log('lastInput ', lastInput);
// console.log('lastInput2 ', lastInput2);

const list = document.createElement('ul');
const fieldNumber = 5;
for (let i = 0; i < fieldNumber; i++) {
	const item = document.createElement('li');
	item.innerText = prompt('Enter product name...');
	list.appendChild(item);
}
document.body.appendChild(list);
