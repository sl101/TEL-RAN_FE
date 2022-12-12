const btnStart = document.querySelector('#btn-start');
const btnStop = document.querySelector('#btn-stop');
const secondsHand = document.querySelector('#seconds-hand');
const minutesHand = document.querySelector('#minutes-hand');
const hoursHand = document.querySelector('#hours-hand');

function getTime() {
	let now = new Date();

	const seconds = now.getSeconds();
	const secondsDeg = (seconds / 60) * 360 + 90;
	secondsHand.style.transform = `rotate(${secondsDeg}deg)`;

	const minutes = now.getMinutes();
	const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
	minutesHand.style.transform = `rotate(${minutesDeg}deg)`;

	const hours = now.getHours();
	const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
	hoursHand.style.transform = `rotate(${hoursDeg}deg)`;

	// console.log('date', now);
}

function startClock() {
	let counter = 0;
	let setI;
	return function () {
		console.log(counter);
		if (counter == 0) {
			console.log('start');
			counter = 1;
			setI = setInterval(getTime, 1000);
			// setInterval(getTime, 1000);
		} else {
			console.log('stop');
			counter = 0;
			clearInterval(setI);
		}
	};
}

const start = startClock();

getTime();
let setInt;
// btnStart.onclick = () => (setInt = setInterval(getTime, 1000));
btnStart.onclick = () => start();

// btnStop.onclick = () => clearInterval(setInt);
// btnStop.onclick = () => start();
