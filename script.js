let startTime;
let running = false;
let interval;
let lapCounter = 1;

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        interval = setInterval(updateDisplay, 10);
        running = true;
        document.querySelector('button:nth-of-type(1)').innerHTML = 'Pause';
    } else {
        clearInterval(interval);
        running = false;
        document.querySelector('button:nth-of-type(1)').innerHTML = 'Resume';
    }
}

function pauseStopwatch() {
    clearInterval(interval);
    running = false;
    document.querySelector('button:nth-of-type(1)').innerHTML = 'Start';
}

function resetStopwatch() {
    clearInterval(interval);
    running = false;
    document.querySelector('.display').innerHTML = '00:00:00';
    document.querySelector('button:nth-of-type(1)').innerHTML = 'Start';
    lapCounter = 1;
    document.querySelector('.lap-list').innerHTML = '';
}

function updateDisplay() {
    const currentTime = new Date().getTime();
    const elapsedTime = new Date(currentTime - startTime);
    const hours = elapsedTime.getUTCHours().toString().padStart(2, '0');
    const minutes = elapsedTime.getUTCMinutes().toString().padStart(2, '0');
    const seconds = elapsedTime.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = Math.floor(elapsedTime.getUTCMilliseconds() / 10).toString().padStart(2, '0');
    document.querySelector('.display').innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function recordLap() {
    if (running) {
        const lapTime = document.querySelector('.display').innerHTML;
        const lapItem = document.createElement('li');
        lapItem.innerHTML = `Lap ${lapCounter}: ${lapTime}`;
        document.querySelector('.lap-list').appendChild(lapItem);
        lapCounter++;
    }
}
