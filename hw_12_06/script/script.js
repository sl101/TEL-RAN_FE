const items = document.querySelectorAll('.item');
const resultField = document.querySelector('.result');
const smileBtn = document.querySelector('.smile');
const compChoice = document.querySelector('.comp-choice');
const scoreField = document.querySelector('.score');

start();

function start() {
	for (let element of items) {
		element.addEventListener('click', getResult);
	}
	smileBtn.addEventListener('click', removeActive);
}

function removeActive() {
	const activeClasses = document.querySelectorAll('.active');
	const hidedClasses = document.querySelectorAll('.hide');
	const items = document.querySelectorAll('.item');
	compChoice.firstElementChild.src = '#';

	for (let element of activeClasses) {
		element.classList.remove('active');
	}
	for (let element of hidedClasses) {
		element.classList.remove('hide');
	}
}

function getResult(e) {
	for (let index = 0; index < items.length; index++) {
		const element = items[index];
		if (element.firstElementChild == e.target) {
			const compMove = Math.floor(Math.random() * 3);

			resultField.textContent =
				compMove == index ? 'Draw' : calcWinner(compMove, index);
			userAnimation(index);
			compAnimation(compMove);
		}
	}
}

function calcWinner(comp, user) {
	const rock = 'won with rock';
	const paper = 'won with paper';
	const scissor = 'won with scissor';

	let winner;
	switch (comp) {
		case 0:
			winner = user == 1 ? `You ${paper}` : `Computer ${rock}`;
			break;
		case 1:
			winner = user == 2 ? `You ${scissor}` : `Computer ${paper}`;
			break;
		case 2:
			winner = user == 0 ? `You ${rock}` : `Computer ${scissor}`;
			break;
	}
	smileAnimation(winner);
	return winner;
}

function userAnimation(value) {
	for (let i = 0; i < items.length; i++) {
		items[i].classList.add('active');
		if (i != value) {
			items[i].classList.add('hide');
		}
	}
	const players = document.querySelector('.players');
	players.classList.add('active');
	resultField.classList.add('active');
}

function compAnimation(value) {
	for (let index in items) {
		if (index == value) {
			compChoice.classList.add('active');
			compChoice.firstElementChild.src = items[index].firstElementChild.src;
		}
	}
}

let userScore = 0;
let compScore = 0;

function smileAnimation(winner) {
	const arr = winner.split(' ');
	if (arr.includes('You')) {
		userScore++;
		smileBtn.firstElementChild.src = 'media/icon/smile.svg';
	} else {
		smileBtn.firstElementChild.src = 'media/icon/sad_smile.svg';
		compScore++;
	}
	console.log(`Score: ${userScore} : ${compScore}`);
	scoreField.textContent = `Score   ${userScore}:${compScore}`;
}
