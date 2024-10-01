import { Calculator, invalidMultiples, storageKey } from '../main';

export const valueHandler = (
  grid: HTMLDivElement,
  input: HTMLInputElement,
  calc: Calculator
) => {
  const addInput = (ev: Event) => {
    const button = <HTMLElement>ev.target;
    if (button.id === 'value') {
      if (calc.active) {
        if (button.className === 'backspace') {
          input.value = input.value.substring(0, input.value.length - 1);
        } else if (button.className === 'allClear') {
          input.value = '';
        } else if (
          input.value.length !== 16 &&
          // this checks if '+', '-', 'x', '÷', '.' are being repeated and prevents it
          (invalidMultiples.includes(
            input.value.charAt(input.value.length - 1)
          ) &&
            invalidMultiples.includes(
              input.value.charAt(input.value.length - 1)
            ) === invalidMultiples.includes(button.innerHTML)) === false
        ) {
          input.value += button.innerHTML;
        } else if (
          button.innerHTML === '-' &&
          input.value.charAt(input.value.length - 1) !== '-'
        ) {
          input.value += button.innerHTML;
        }
      } else if (button.className === 'allClear') {
        calc.active = true;
        input.placeholder = '0';  
      }
    }
    localStorage.setItem(storageKey, JSON.stringify(calc));
    console.log(button.innerHTML === '-');
    console.log(input.value.charAt(input.value.length - 3) !== '-');
  };
  grid.addEventListener('click', (ev) => {
    addInput(ev);
  });
};
