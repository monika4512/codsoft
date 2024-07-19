// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-num') || e.target.getAttribute('data-op');

            if (value === null) {
                if (e.target.id === 'clear') {
                    display.innerText = '0';
                } else if (e.target.id === 'equals') {
                    try {
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = 'Error';
                    }
                }
            } else {
                if (display.innerText === '0' || display.innerText === 'Error') {
                    display.innerText = value;
                } else {
                    display.innerText += value;
                }
            }
        });
    });
});
