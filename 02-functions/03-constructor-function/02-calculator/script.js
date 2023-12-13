function Calculator() {
  this.display = document.querySelector('.display');

  this.start = () => {
    this.btnClicks();
    this.pressEnter();
    this.inputFocus();
  }

  this.btnClicks = () => {
    document.addEventListener('click', e => {
      const el = e.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-delete')) this.delete();
      if (el.classList.contains('btn-equal')) this.result();
    });
  };

  this.pressEnter = () => {
    this.display.addEventListener('keypress', e => {
      if (e.keyCode !== 13) return;
      this.result();
    })
  }

  this.inputFocus = () => this.display.focus();

  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus();
  }

  this.clear = () => this.display.value = "";
  
  this.delete = () => this.display.value = this.display.value.slice(0, -1);

  this.result = () => {
    try {
      const mathEquation = eval(this.display.value);
      if (!mathEquation) {
        alert('Invalid result');
        return;
      }
      this.display.value = mathEquation;

    } catch (e) {
      alert('Ivalid result');
      return;
    }
  };
}

const calculator = new Calculator();
calculator.start();
