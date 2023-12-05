let score = 0;
let totalScore = document.querySelector('#score');
let time = 20;
let countTime = document.querySelector('#time');
const moguras = document.querySelectorAll('.mogura');
const startButton = document.querySelector('.button');
let gameOver = false;
let tomare;

// ボタンをクリックするとゲームスタート
startButton.addEventListener('click', () => {
  gameOver = false;
  score = 0;
  totalScore.innerHTML = score;
  time = 20;
  countTime.innerHTML = time;
  start();
  timerStart();
});

// もぐらが動き始める
const start = () => {
  moguras.forEach((mogura) => {
    mogura.style.visibility = 'hidden';
    let random = Math.random();
    setTimeout(appear, random * 6000, mogura);
    setTimeout(stop, 20000, mogura);
  });
};

// カウントダウンが始まる
const timerStart = () => {
  tomare = setInterval(timer, 1000);
  // setTimeout(timerStop, 20000);
};

// カウントダウンする
const timer = () => {
  time--;
  countTime.innerHTML = time;
};

// もぐらが出る
const appear = (mogura) => {
  if (gameOver == false) {
    mogura.style.visibility = 'visible';
  }
  let random = Math.random();
  mogura.animate(keyframes, options);
  setTimeout(disappear, random * 2000, mogura);
};

// もぐらが引っ込む
const disappear = (mogura) => {
  mogura.style.visibility = 'hidden';
  let random = Math.random();
  setTimeout(appear, random * 6000, mogura);
};

// もぐらをたたくと画像が変わる・加点される
moguras.forEach((mogura) => {
  mogura.addEventListener('click', (event) => {
    event.target.src = 'hit-mogura.png';
    score++;
    totalScore.innerHTML = score;
    setTimeout(up, 1000, mogura);
  });
});

// たたいた時に変わった画像が元に戻る
const up = (mogura) => {
  mogura.src = 'normal-mogura.png';
};

// ゲーム終了
const stop = (mogura) => {
  gameOver = true;
  mogura.style.visibility = 'hidden';
  clearInterval(tomare);
  countTime.innerHTML = 0;
};

// カウントダウン終了
// const timerStop = () => {
//   clearInterval(tomare);
// };

//アニメーション
const keyframes = {
  opacity: [0, 1],
  translate: ['0 20px', 0],
};
const options = {
  duration: 300,
  fill: 'forwards',
};
