const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.stopBtn.disabled = true;
let intervalID = null;

class RandomBodyColor {
  DELAY = 1000;

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  interval() {
    intervalID = setInterval(() => {
      refs.body.style.backgroundColor = this.getRandomHexColor();
    }, this.DELAY);
  }

  start() {
    refs.startBtn.addEventListener('click', () => {
      this.interval();
      refs.startBtn.disabled = true;
      refs.stopBtn.disabled = false;
    });
    refs.stopBtn.addEventListener('click', this.stop);
  }

  stop() {
    clearInterval(intervalID);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    refs.body.style.backgroundColor = '#ffffff';
  }
}

const startChangeBgColor = new RandomBodyColor();
startChangeBgColor.start();
