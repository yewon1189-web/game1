const message = document.getElementById('message');
const message1 = document.querySelector('#message1');
const countdown = document.getElementById('countdown');
const overlay = document.querySelector('#overlay');
const game = document.getElementById('game');
const result = document.getElementById('result');

// 1) 안내 메시지 2초 후 사라짐
setTimeout(() => {
    message.style.display = 'none';
    message1.style.display = 'block';    // 안내 메시지 사라짐
    startCountdown();                 // 카운트다운 시작
}, 2000);

function startCountdown() {
    countdown.style.display = 'block'; // 이제 카운트다운 표시 시작

    let count = 3;
    countdown.innerText = count;

    let countdownInterval = setInterval(() => {
        count--;
        countdown.innerText = count;

        if (count === 0) {
            clearInterval(countdownInterval);
            countdown.style.display = 'none';
            message1.style.display = 'none';
            overlay.style.display = 'none' // 카운트다운 사라짐
            startGame(); // 게임 시작!
        }
    }, 1000); // 1초마다 실행
}

let currentTemp = 40;
let timer = 10;
let clickCount = 0;
let isPlaying = false;

function startGame() {
    const game = document.querySelector('#game');
    const timerEl = document.querySelector('#timer');
    const tempDisplay = document.querySelector('#temp-display');
    const playBtn = document.querySelector('#play-btn');
    const fall = document.querySelector('#fall');

    game.style.display = 'block';
    isPlaying = true;

    playBtn.ontouchstart = (e) => {
        e.preventDefault();
        if (!isPlaying) return;

        fall.style.transform = " scale(1.1)";
        setTimeout(() => {
            fall.style.transform = " scale(1)";
        }, 200);

        clickCount++;
        currentTemp -= 0.3;

        let displayTemp = Math.floor(currentTemp);

        let emoji = "🥵";
        if (displayTemp <= 20) {
            emoji = "☺️";
        } else if (displayTemp <= 30) {
            emoji = "😳";
        }
        tempDisplay.innerText = `${displayTemp}℃ ${emoji}`;
    };

    let gameTimer = setInterval(() => {
        if (!isPlaying) return;

        timer--;
        timerEl.innerText = `Time: ${timer}`;

        if (timer <= 0) {
            clearInterval(gameTimer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    isPlaying = false
    overlay.style.display = "flex";
    result.style.display = 'block';
    const displayTemp = Math.floor(currentTemp);

    if (displayTemp <= 20) {
        result.dataset.status = "pass";
    } else {
        result.dataset.status = "fail";
    }
}

const resultBtn = document.querySelector('#result-btn');

resultBtn.ontouchstart = (e) => {
    e.preventDefault();
    if (result.dataset.status === "pass") {
        window.location.href = "pass.html";
    } else {
        window.location.href = "fail.html";
    }
};


const background1 = document.querySelector("#background1");
const background2 = document.querySelector("#background2");
const background3 = document.querySelector("#background3");
const background4 = document.querySelector("#background4");



let touchCount = 0;
let fadeStep = 0;

document.body.ontouchstart = (e) => {
    touchCount++;

    if (touchCount % 20 === 0) {
        fadeStep++;
        if (fadeStep === 1) {
            background1.style.opacity = 0;
            summer1.style.opacity = 0;
            summer2.style.opacity = 1;
        } else if (fadeStep === 2) {
            background2.style.opacity = 0;
        } else if (fadeStep === 3) {
            background3.style.opacity = 0;
        }
        // background4는 마지막이라 남김
    }
};