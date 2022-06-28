const buttons = document.querySelectorAll('button');
let display = document.getElementById('display');
let result = document.querySelector('.result');
let Ans = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case '=':
                let calculation = display.value.replace("x", "*").replace("÷", "/").replace("^", "**");   
                for (let i = 1; i < calculation.length; i++) {
                    if (calculation[i] == 'A' && calculation[i-1] != "+" && calculation[i-1] != "-" 
                        && calculation[i-1] != "*"&& calculation[i-1] != "/") {
                        calculation = calculation.slice(0, i) + '*' + calculation.slice(i);
                    }
                }

                if (operate(calculation) == Infinity) result.textContent = 'Math ERROR';
                else {
                    Ans = operate(calculation);
                    result.textContent = +Ans.toFixed(10);
                }
                break;
            case 'AC':
                display.value = '';
                result.textContent = '';
                break;
            case 'DEL':
                if (result.textContent) break;
                if (display.value.slice(display.value.length-3, display.value.length) == 'Ans') {
                    display.value = display.value.slice(0, display.value.length-3)
                } 
                else {
                    display.value = display.value.slice(0, display.value.length-1)
                };
                break;
            case '+':
            case '-':
            case 'x':
            case '÷':
            case 'x10^':
                if (typeof(+result.textContent) == 'number' && (result.textContent != '')) {
                    display.value = 'Ans';
                    result.textContent = '';                    
                };
                display.value += button.textContent;
                break;
            default:
                if (result.textContent) {
                    display.value = button.textContent;
                    result.textContent = '';                    
                }
                else display.value += button.textContent
        } 
    })
})

function operate(fn) {
    return new Function('return ' + fn)();
}



