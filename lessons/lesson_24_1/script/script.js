const startBtn = document.querySelector('#start');

function start() {
	let compMove = Math.floor(Math.random() * 3);
	let userMove = parseInt(prompt('камень, бумага или ножницы?'));
	// console.log(compMove);
	// console.log(userMove);
	if (isNaN(userMove) || userMove > 2 || userMove < 0) {
		alert('Введите 0 или 1 или 2...');
	} else if (compMove == 0 && userMove == 1) {
		alert('Вы выиграли с помощью бумаги');
	} else if (compMove == 0 && userMove == 2) {
		alert('Комп выиграл с помощью камня');
	} else if (compMove == 1 && userMove == 0) {
		alert('Комп выиграл с помощью бумаги');
	} else if (compMove == 1 && userMove == 2) {
		alert('Вы выиграли с помощью ножниц');
	} else if (compMove == 2 && userMove == 0) {
		alert('Вы выиграли с помощью камня');
	} else if (compMove == 2 && userMove == 1) {
		alert('Комп выиграл с помощью ножниц');
	} else {
		alert('Ничья');
	}
}

startBtn.onclick = () => start();
