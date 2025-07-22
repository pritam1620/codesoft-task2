const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      input = '';
      display.textContent = '0';
    } else if (value === '←') {
      input = input.slice(0, -1);
      display.textContent = input || '0';
    } else if (value === '=') {
      try {
        const result = eval(input.replace('%', '/100'));
        display.textContent = result;
        input = result.toString();
      } catch {
        display.textContent = 'Error';
        input = '';
      }
    } else {
      input += value;
      display.textContent = input;
    }
  });
});