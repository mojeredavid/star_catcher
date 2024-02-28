// select element
const result = document.querySelector('#result');
const imgEl = document.querySelector('img');
const container = document.querySelector('.container');
const gameOver = document.querySelector('.game-over');

const listOfImages = [
    'assest/star-yellow.png',
    'assest/star-purple.png',
    'assest/star-blue.png',
]
let score = 0;
setInterval(function(){
    imgEl.src = listOfImages[Math.floor(Math.random() * listOfImages.length)]
    imgEl.style.top = `${Math.floor(Math.random() * 400)}px`;
    imgEl.style.left = `${Math.floor(Math.random() * 1200)}px`;
}, 2000)

//change result
result.textContent = score;

//how to use eventListener()

imgEl.addEventListener('click', function(){

    score++;

    result.textContent = score;
    if(score === 50 ){
    container.innerHTML = '';
    gameOver.style.display = 'block'
    gameOver.innerHTML = '<span>Game Complete 🥇</span><button onclick="window.location.reload()">Start new Game </button>';
}


});