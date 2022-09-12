// const refs = {
//   body: document.querySelector('body'),
//   startBtn: document.querySelector('button[data-start]'),
//   stopBtn: document.querySelector('button[data-stop]'),
// };

// refs.stopBtn.disabled = true;
// let intervalID = null;

class RandomBodyColor {
  constructor() {
    this.intervalID = null;
    this.body = document.querySelector('body');
    this.startBtn = document.querySelector('button[data-start]');
    this.stopBtn = document.querySelector('button[data-stop]');
    this.stopBtn.disabled = true;
  }

  DELAY = 1000;

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  interval() {
    this.intervalID = setInterval(() => {
      this.body.style.backgroundColor = this.getRandomHexColor();
    }, this.DELAY);
  }

  start() {
    this.startBtn.addEventListener('click', () => {
      this.interval();
      this.startBtn.disabled = true;
      this.stopBtn.disabled = false;
    });
    this.stop();
  }

  stop() {
    this.stopBtn.addEventListener('click', () => {
      clearInterval(this.intervalID);
      this.startBtn.disabled = false;
      this.stopBtn.disabled = true;
      this.body.style.backgroundColor = '#ffffff';
    });
  }
}

const startChangeBgColor = new RandomBodyColor();
startChangeBgColor.start();
