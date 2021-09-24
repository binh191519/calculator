const buttons = document.querySelectorAll('button');
let display = document.getElementById('display');
let result = document.querySelector('.result');
let Ans = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case '=':
                Ans = operate(display.value);
                if (Ans == Infinity) result.textContent = 'Math ERROR';
                else result.textContent = +Ans.toFixed(10);
                break;
            case 'AC':
                display.value = '';
                result.textContent = '';
                break;
            case 'DEL':
                if (result.textContent) break;
                if (display.value[display.value.length-1] == 's') {
                    display.value = display.value.slice(0, display.value.length-3)
                } 
                else {
                    display.value = display.value.slice(0, display.value.length-1)
                };
                break;
            case '+':
            case '-':
            case '*':
            case '/':
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



