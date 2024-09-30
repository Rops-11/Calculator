import { Calculator, storageKey } from '../main';

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
        } else if (input.value.length !== 16) {
          input.value += button.innerHTML;
        }
      } else {
        if (button.className === 'allClear') {
          calc.active = true;
          input.placeholder = '0';
        }
      }
    }
    localStorage.setItem(storageKey, JSON.stringify(calc));
  };
  grid.addEventListener('click', (ev) => {
    addInput(ev);
  });
};
