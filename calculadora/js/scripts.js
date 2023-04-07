class Calculator {
  // O método constructor é executado quando o objeto é instanciado 
  constructor() {
    this.upperValue = document.querySelector('#upper-number');
    this.resultValue = document.querySelector('#result-number');
    this.reset = 0;
  }

  btnPress() {
    console.log('clicou');
  }
}

// start obj
let calc = new Calculator;

// start btns
let buttons = document.querySelectorAll('.btn');

// map all buttons
for(let i = 0; buttons.length > i; i++) {
  buttons[i].addEventListener('click', calc.btnPress);
}