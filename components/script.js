const stopwatch = new Stopwatch(document.querySelector('.stopwatch'), document.querySelector('.results'));

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {stopwatch.reset()
stopwatch.print(stopwatch.times);
});

let addResultButton = document.getElementById('addResult');
addResultButton.addEventListener('click', () => stopwatch.addResult());

let cleanResultsButton = document.getElementById('cleanResults');
cleanResultsButton.addEventListener('click', () => stopwatch.cleanResults());
