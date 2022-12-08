const items = document.querySelectorAll('.item');
const compChoice = document.querySelector('.comp-choice');
const smileBtn = document.querySelector('.smile');
let userScore = 0;
let compScore = 0;

for (let item of items) {
	item.addEventListener('click', startGame);
}
smileBtn.addEventListener('click', removeAnimation);

function startGame(e) {
	let index;
	for (let i in items) {
		if (items[i] == e.target) {
			index = i;
		}
	}
	const compMove = Math.floor(Math.random() * 3);

	const resultField = document.querySelector('.result');
	resultField.classList.add('active');
	const resultMessage = compMove == index ? 'Draw' : getWinner(compMove, index);
	resultField.textContent = resultMessage;
	animateUser(index);
	animateComp(compMove);
	getScore(resultMessage);
}

function getWinner(comp, user) {
	const rock = 'won with rock';
	const paper = 'won with paper';
	const scissor = 'won with scissor';

	switch (comp) {
		case 0:
			return user == 1 ? `You ${paper}` : `Computer ${rock}`;
		case 1:
			return user == 2 ? `You ${scissor}` : `Computer ${paper}`;
		case 2:
			return user == 0 ? `You ${rock}` : `Computer ${scissor}`;
	}
}

function getScore(message) {
	let smileIcon = 'media/icon/draw_smile.svg';
	const arr = message.split(' ');
	if (arr.includes('You')) {
		smileIcon = 'media/icon/smile.svg';
		userScore++;
	} else if (arr.includes('Computer')) {
		smileIcon = 'media/icon/sad_smile.svg';
		compScore++;
	}
	animateSmile(smileIcon);
}

function animateSmile(url) {
	smileBtn.firstElementChild.src = url;
	setScore();
}

function setScore() {
	const scoreField = document.querySelector('.score');
	scoreField.textContent = `Score   ${userScore}:${compScore}`;
}

function animateUser(value) {
	for (let i = 0; i < items.length; i++) {
		items[i].classList.add('active');
		if (i != value) {
			items[i].classList.add('hide');
		}
	}
	const players = document.querySelector('.players');
	players.classList.add('active');
}

function animateComp(value) {
	compChoice.classList.add('active');
	for (let index in items) {
		if (index == value) {
			const image = items[index].style.backgroundImage;
			console.log('image', image);
			compChoice.style.backgroundImage = `${image}`;
		}
	}
}

function removeAnimation() {
	const activeClasses = document.querySelectorAll('.active');
	const hidedClasses = document.querySelectorAll('.hide');

	for (let element of activeClasses) {
		element.classList.remove('active');
	}
	for (let element of hidedClasses) {
		element.classList.remove('hide');
	}
}
