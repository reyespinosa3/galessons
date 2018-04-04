$(function() {
	$('#start').on('click', startTimer);
	$('#stop').on('click', stopTimer);
	$('#reset').on('click', resetTimer);
	$('#countdown').on('click', countdownTimer);
}); // end window onload

const $stopwatchScreen = $('#stopwatch');

let currentTime = parseInt($stopwatchScreen.text());

let currentInterval = "";

//===================
// EVENT HANDLERS
// ==================
const render = () => {
  $stopwatchScreen.text(currentTime);
}

const startTimer = () => {
  console.log('start timer clicked');
  if (currentInterval != ""){
    clearInterval(currentInterval);
    currentTime = 0;
    render();
  }

  currentInterval = setInterval(() => {
    currentTime = currentTime + 1;
    render();
  }, 1000);
};

var stopTimer = function() {
  console.log("Stop timer clicked");
  clearInterval(currentInterval);

};

var resetTimer = function() {
  console.log("Reset timer clicked");
  if (currentInterval != "") {
  clearInterval(currentInterval);
  currentTime = 0;
  render();
  }
};

var countdownTimer = function () {
  console.log("Countdown time cicked");
  currentInterval = setInterval(() => {
    currentTime = currentTime - 1;
    render();
  }, 1000);
};
