const duration = 25 * 60;
let time = duration;
let interval;


function startTimer() {
	interval = setInterval(() => {
		time--;
		updateTimer();
		if (time <= 0) {
			clearInterval(interval);
		}
	}, 1000);
}

function pauseTimer() {
	clearInterval(interval);
}

function resetTimer() {
	time = duration;
	updateTimer();
}


function updateTimer() {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	document.querySelector(".minutes").innerText = minutes;
	document.querySelector(".seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}


document.querySelector("#start").addEventListener("click", startTimer);
document.querySelector("#pause").addEventListener("click", pauseTimer);
document.querySelector("#reset").addEventListener("click", resetTimer);