document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'C') {
                display.value = '';
            } else if (value === 'DEL') {
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    display.value = eval(display.value
                        .replace('x^2', '**2')
                        .replace('∞', 'Infinity')
                        .replace('×', '*'));
                } catch {
                    display.value = 'Error';
                }
            } else {
                if (value === 'x^2') {
                    display.value += '**2';
                
                } else if (value === '|x|') {
                    display.value += 'Math.abs(';
                } else if (value === '∞') {
                    display.value += 'Infinity';
                } else if (value === '×') {
                    display.value += '*';
                } else {
                    display.value += value;
                }
            }
        });
    });
});
