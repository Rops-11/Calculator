export const solve = (equals: HTMLButtonElement) => {
  const solve = () => {
    let inputValue = document.querySelector<HTMLInputElement>('.input')!.value;
    let result = '';
    for (let i = 0; i < inputValue.length; i++) {
      if (inputValue[i] === 'x') {
        result += ' * ';
      } else if (inputValue[i] === '÷') {
        result += ' / ';
      } else if (inputValue[i] === '+') {
        result += ' + ';
      } else if (inputValue[i] === '-') {
        result += ' - ';
      } else {
        result += inputValue[i];
      }
    }
    // Using the Try Catch to catch errors in the operations.
    try {
      // Calculation
      if (document.querySelector<HTMLInputElement>('.input')!.value !== '') {
        document.querySelector<HTMLInputElement>('.input')!.value =
          eval(result);
      }
    } catch (error) {
      document.querySelector<HTMLInputElement>('.input')!.value =
        `${error}`.split(':')[0]; // Error Type Only
      setTimeout(
        // Resets the input value
        () => (document.querySelector<HTMLInputElement>('.input')!.value = ''),
        1000
      );
    }
  };

  equals.addEventListener('click', () => solve());
};
