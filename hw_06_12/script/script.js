const items = document.querySelectorAll('.item');
const resultField = document.querySelector('.result');

function start() {
	for (let index in items) {
		items[index].onclick = () => {
			const compMove = Math.floor(Math.random() * 3);

			resultField.textContent =
				compMove == index ? 'Draw' : calcWinner(compMove, index);
		};
	}
}

function calcWinner(comp, user) {
	const rock = 'won with rock';
	const paper = 'won with paper';
	const scissor = 'won with scissor';

	switch (comp) {
		case 0:
			return user == 1 ? `You ${paper}` : `Computer ${rock}`;
		case 1:
			return user == 0 ? `Computer ${paper}` : `You ${scissor}`;
		case 2:
			return user == 0 ? `You ${rock}` : `Computer ${scissor}`;
	}
}

start();
