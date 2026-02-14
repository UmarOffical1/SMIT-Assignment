const colors = [
  "red","blue","green","yellow","purple","orange",
  "pink","cyan","lime","brown","teal","magenta",
  "gold","coral","navy","olive","maroon","aqua"
];

let score = 0;
let targetColor = "";
let timeLeft = 10;
let timerInterval = null;

const scoreEl = document.getElementById("score");
const targetColorEl = document.getElementById("targetColor");
const colorNameEl = document.getElementById("colorName");
const colorGrid = document.getElementById("colorGrid");
const gameOverScreen = document.getElementById("gameOver");
const finalScoreEl = document.getElementById("finalScore");
const timeEl = document.getElementById("time");

/* Random color */
function randomColor(){
  return colors[Math.floor(Math.random() * colors.length)];
}

/* Shuffle */
function shuffle(array){
  return array.sort(() => Math.random() - 0.5);
}

/* Timer */
function startTimer(){
  clearInterval(timerInterval);
  timeLeft = 20;
  timeEl.innerText = timeLeft;

  timerInterval = setInterval(()=>{
    timeLeft--;
    timeEl.innerText = timeLeft;

    if(timeLeft <= 0){
      clearInterval(timerInterval);
      gameOver();
    }
  },1000);
}

/* Game Over */
function gameOver(){
  finalScoreEl.innerText = score;
  gameOverScreen.style.display = "flex";
}

/* New Round */
function newRound(){
  colorGrid.innerHTML = "";

  targetColor = randomColor();
  targetColorEl.style.background = targetColor;
  colorNameEl.innerText = targetColor.toUpperCase();

  // More colors (16)
  let mixedColors = shuffle([...colors]).slice(0, 16);

  if(!mixedColors.includes(targetColor)){
    mixedColors[Math.floor(Math.random() * mixedColors.length)] = targetColor;
  }

  mixedColors.forEach(color=>{
    const div = document.createElement("div");
    div.classList.add("color-box");
    div.style.background = color;

    div.addEventListener("click", ()=>{
      if(color === targetColor){
        score++;
        scoreEl.innerText = score;
        newRound();
        startTimer(); // reset timer on correct
      }else{
        gameOver();
      }
    });

    colorGrid.appendChild(div);
  });

  startTimer();
}

/* Restart */
function restartGame(){
  score = 0;
  scoreEl.innerText = score;
  gameOverScreen.style.display = "none";
  newRound();
}

/* Start */
newRound();
