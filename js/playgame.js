let randomNumber;
let attempts;
let timer;
const maxAttempts = 3;
const timeLimit = 30; 
document.addEventListener('DOMContentLoaded', function() {
    const guessButton = document.getElementById('guessButton');
    const newGameButton = document.getElementById('newGameButton');

    guessButton.addEventListener('click', checkGuess);
    newGameButton.addEventListener('click', startNewGame);

    startNewGame(); 
});

function startNewGame() {
    randomNumber = generateRandomNumber();
    attempts = 0;
    timer = timeLimit;
    
    updateAttempts();
    updateTimer();
    resetResult();

    document.getElementById('newGameButton').style.display = 'none';
    document.getElementById('guessButton').style.display = 'block';

    showGiftSticker(false);
    hideFireworks();
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function checkGuess() {
    const guessInput = document.getElementById('guessInput').value;
    if (guessInput === '') return;

    attempts++;

    if (parseInt(guessInput) === randomNumber) {
        showResult('Поздравляем! Вы угадали число! Выберите: 50% скидка на любой курс или бесплатный курс "Копирайтинг"!');
        showFireworks();
        showGiftSticker(true);
        document.getElementById('guessButton').style.display = 'none';
        document.getElementById('newGameButton').style.display = 'block';
    } else {
        if (attempts >= maxAttempts) {
            showResult(`Игра окончена! Вы использовали все попытки. Правильный ответ был ${randomNumber}.`);
            document.getElementById('guessButton').style.display = 'none';
            document.getElementById('newGameButton').style.display = 'block';
        } else {
            showResult(`Неверно! Попробуйте ещё раз. Осталось попыток: ${maxAttempts - attempts}`);
        }
    }

    updateAttempts();

    if (attempts >= maxAttempts) {
        document.getElementById('guessButton').style.display = 'none';
        document.getElementById('newGameButton').style.display = 'block';
    }
}

function updateAttempts() {
    document.getElementById('attempts').textContent = `Попыток сделано: ${attempts} из ${maxAttempts}`;
}

function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = `Осталось времени: ${timer} сек.`;

    const countdown = setInterval(function() {
        timer--;
        timerElement.textContent = `Осталось времени: ${timer} сек.`;
        if (timer <= 0) {
            clearInterval(countdown);
            showResult(`Игра окончена! Время истекло. Правильный ответ был ${randomNumber}.`);
            document.getElementById('guessButton').style.display = 'none';
            document.getElementById('newGameButton').style.display = 'block';
        }
    }, 1000);
}

function showResult(message) {
    document.getElementById('result').textContent = message;
}

function resetResult() {
    document.getElementById('result').textContent = '';
}

function showFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    fireworksContainer.style.display = 'block';
    fireworksContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        fireworksContainer.appendChild(firework);
    }

    setTimeout(function() {
        hideFireworks();
    }, 1500);
}

function hideFireworks() {
    document.getElementById('fireworks').style.display = 'none';
}

function showGiftSticker(show) {
    const giftSticker = document.getElementById('giftSticker');
    if (show) {
        giftSticker.style.display = 'block';
    } else {
        giftSticker.style.display = 'none';
    }
}
