var num1 = '';
var operator = '';
var num2 = '';

function press(value) {
    if (['+', '-', '*', '/'].includes(value)) {
        operator = value;
        document.getElementById('display').value = num1 + operator; 
    } else {
        if (operator === '') {
            num1 += value;
            document.getElementById('display').value = num1;
        } else {
            num2 += value;
            document.getElementById('display').value = num1 + operator + num2;
        }
    }
}

function clearDisplay() {
    num1 = '';
    operator = '';
    num2 = '';
    document.getElementById('display').value = ''; 
}

function calculate() {
    var result;
    switch (operator) {
        case '+':
            result = Number(num1) + Number(num2); 
            break;
        case '-':
            result = Number(num1) - Number(num2);
            break;
        case '*':
            result = Number(num1) * Number(num2);
            break;
        case '/':
            result = Number(num1) / Number(num2);
            break;
        default:
            result = 'Error';
    }
    document.getElementById('display').value = result; 
    num1 = result.toString(); 
    operator = '';
    num2 = '';
}
