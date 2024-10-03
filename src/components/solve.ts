import { invalidMultiples } from '../main';

export const solve = (equals: HTMLButtonElement) => {
  const solve = () => {
    let inputValue = document.querySelector<HTMLInputElement>('.input')!.value;
    let result = '';
    if (
      invalidMultiples.includes(inputValue.charAt(inputValue.length - 1)) !==
      true
    ) {
      // reformatting the input
      for (let i = 0; i < inputValue.length; i++) {
        if (inputValue[i] === 'x') {
          result += '*';
        } else if (inputValue[i] === '÷') {
          result += '/';
        } else if (inputValue[i] === '+') {
          result += '+';
        } else if (inputValue[i] === '-') {
          result += '-';
        } else {
          result += inputValue[i];
        }
      }
      // Using the Try Catch to catch errors in the operations.
      try {
        // Calculation
        if (document.querySelector<HTMLInputElement>('.input')!.value !== '') {
          document.querySelector<HTMLInputElement>('.input')!.value =
            // rounds off with 4 decimal places while using the eval function
            (Math.round(eval(result) * 10000) / 10000).toString(); 
        }
      } catch (error) {
        document.querySelector<HTMLInputElement>('.input')!.value =
          `${error}`.split(':')[0]; // Error Type Only
        setTimeout(
          // Resets the input value
          () =>
            (document.querySelector<HTMLInputElement>('.input')!.value = '0'),
          1000
        );
      }
    }
  };
  equals.addEventListener('click', () => solve());
};
