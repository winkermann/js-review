function createCalculator() {
  return {
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),
    btnDelete: document.querySelector('.btn-delete'),
    btnEqual: document.querySelector('.btn-equal'),

    start() {
      this.btnClicks();
      this.pressEnter();
    },

    pressEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.result();
        }
      })
    },

    clearDisplay() {
      this.display.value = "";
    },

    deleteNumber() {
      this.display.value = this.display.value.slice(0, -1);
    },

    result() {
      let mathEquation = this.display.value;
      try {
        // usar o método eval com cautela
        mathEquation = eval(mathEquation);
        if (!mathEquation) {
          alert('Invalid result');
          return;
        }
        this.display.value = mathEquation;
      } catch (e) {
        alert('Invalid result');
        return
      }
    },

    btnClicks() {
      // this -> calculadora
      // ao utilizar arrow function o this se mantém "calculadora", ao utilizar função comum, o this a partir da linha 48 passa a ser document, o que necessita fazer bind na linha 66 para manter o this na calculadora.
      document.addEventListener('click', e => {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnToDisplay(el.innerText);
        };

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-delete')) {
          this.deleteNumber();
        }

        if (el.classList.contains('btn-equal')) {
          this.result();
        }
      });
    },

    btnToDisplay(value) {
      this.display.value += value;
    },
  }
}

const calculator = createCalculator();
calculator.start();