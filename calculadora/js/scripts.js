class Calculator {
  // O método constructor é executado quando o objeto é instanciado 
  constructor() {
    this.upperValue = document.querySelector('#upper-number');
    this.resultValue = document.querySelector('#result-number');
    this.reset = 0;
  }

  clearValues() {
    this.upperValue.textContent = '0';
    this.resultValue.textContent = '0';
  }

  checkLastDigit(input, upperValue, reg) {
    if((
      !reg.test(input) &&
      !reg.test(upperValue.substr(upperValue.length - 1))
    )) {
      return true;
    } else {
      return false;
    }
  }

  // resolve a operação
  resolution() {
    // explode uma string em um array
    let upperValueArray = (this.upperValue.textContent).split(" ");

    // resultado da operação
    let result = 0;

    for(let i = 0; i < upperValueArray.length; i++) {
      let actualItem = upperValueArray[i];

      if (actualItem == "+") {
        result = parseFloat(upperValueArray[i - 1]) + parseFloat(upperValueArray[i + 1]);
      }
    }

    this.upperValue.textContent = result;
    this.resultValue.textContent = result;
  }

  btnPress() {
    let input = this.textContent;
    let upperValue = calc.upperValue.textContent;
    
    // verifica se tem somente números
    const reg = new RegExp('^\\d+$');

    // ativa método de limpar o display
    if (input == 'AC') {
      calc.clearValues();

    }  else if (input == "=") {
      calc.resolution();
    } else {
      // verifica se precisa adicionar ou não
      if(calc.checkLastDigit(input, upperValue, reg)) {
        return false;
      }

      // adiciona espaços aos operadores
      if(!reg.test(input)) {
        input = ` ${input} `;
      }


      if(upperValue === '0') {
        calc.upperValue.textContent = input;
      } else {
        calc.upperValue.textContent += input;
      }   
    }
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