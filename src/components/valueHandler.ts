import { Calculator, invalidMultiples, storageKey } from '../main';

export const valueHandler = (
  grid: HTMLDivElement,
  input: HTMLInputElement,
  calc: Calculator
) => {
  // This is a function that creates a split of the input separated by the operators
  const makeSplitInput = () => {
    let splitInput: string[] = []; // string[] catcher
    let number = ''; // number catcher
    for (let i = 0; i < input.value.length; i++) {
      // this iterates the characters of the input and checks whether it is an operator or not
      if (!invalidMultiples.includes(input.value.charAt(i))) {
        number += input.value.charAt(i); // not operator, its part of a number
      } else {
        splitInput.push(number); // got an operator, push the number to the list
        number = ''; // reset the number
      }
    }
    if (number !== '') {
      splitInput.push(number); // last push for the last number
    }
    return splitInput;
  };

  const addInput = (ev: Event) => {
    const button = <HTMLElement>ev.target; // get the clicked button
    let splitInput = makeSplitInput(); // makes the split list

    if (button.id === 'value') {
      if (calc.active) {
        if (button.className === 'backspace') {
          // removes the last character of the string
          input.value = input.value.substring(0, input.value.length - 1);
        } else if (button.className === 'allClear') {
          input.value = ''; // clears the input
        } else if (
          input.value.length !== 16 && // limit of the input
          button.innerHTML !== '.' && //  prevent multiple decimal points
          // this checks if the operators are being repeated and prevents it
          (invalidMultiples.includes(
            input.value.charAt(input.value.length - 1)
          ) &&
            invalidMultiples.includes(
              input.value.charAt(input.value.length - 1)
            ) === invalidMultiples.includes(button.innerHTML)) === false
        ) {
          if (
            // prevents first number being 0
            splitInput[splitInput.length - 1] === '0' &&
            !invalidMultiples.includes(button.innerHTML) // so that operators wont repeat
          ) {
            input.value = button.innerHTML; // changes a lone 0 to a number
          } else input.value += button.innerHTML; // main thing that adds the input
        } else if (
          // this is for the negative numbers
          button.innerHTML === '-' &&
          input.value.charAt(input.value.length - 1) !== '-'
        ) {
          input.value += button.innerHTML;
        } else if (
          // main thing that prevents multiple decimal points
          button.innerHTML === '.' &&
          !splitInput[splitInput.length - 1].includes('.')
        ) {
          input.value += button.innerHTML;
        }
      } else if (button.className === 'allClear') {
        calc.active = true; // what turns the calculator on
        // remove classname "off" for the on effect
        input.classList.remove('off'); 
      }
    }
    if (input.value === '') {
      input.value = '0'; // if input is empty show 0
    }

    localStorage.setItem(storageKey, JSON.stringify(calc)); // this saves the state of the calculator if it's on or not
  };
  grid.addEventListener('click', (ev) => {
    addInput(ev);
  });
};
