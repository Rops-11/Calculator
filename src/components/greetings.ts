import { Calculator, storageKey } from '../main';

export const hello = (helloButton: HTMLButtonElement, calc: Calculator) => {
  const hello = () => {
    const hellos = [
      'Hello', // English
      'Bonjour', // French
      'Hola', // Spanish
      'Ciao', // Italian
      'Hallo', // German
      'Konnichiwa', // Japanese
      '你好', // Chinese (Mandarin)
      '안녕하세요', // Korean
      'Здравствуйте', // Russian
      'Olá', // Portuguese
    ];
    if (calc.active) {
      if (calc.helloActive === true) {
        // this is for the button cooldown
        let input = document.querySelector<HTMLInputElement>('.input')!;
        document.querySelector<HTMLInputElement>('.input')!.value =
          hellos[Math.floor(Math.random() * hellos.length)]; // randomly picks a langauge to use
        calc.helloActive = false; // for cooldown
        setTimeout(
          // the cooldown
          () => ((input.value = '0'), (calc.helloActive = true)), // when cooldown ends
          1000
        );
        localStorage.setItem(storageKey, JSON.stringify(calc));
      }
    }
  };
  helloButton.addEventListener('click', () => hello());
};

export const bye = (byeButton: HTMLButtonElement, calc: Calculator) => {
  const bye = () => {
    if (calc.active) {
      let input = document.querySelector<HTMLInputElement>('.input')!;
      input.value = 'Goodbye!!!'; // shows the goodbye message
      setTimeout(
        () => (
          (input.placeholder = ''),
          (input.value = ''),
          input.classList.add('off') // adds classname off for the off effect
        ),
        1500
      );
      calc.active = false; //  deactivates the calculator

      localStorage.setItem(storageKey, JSON.stringify(calc)); // saves the state
    }
  };
  byeButton.addEventListener('click', () => bye());
};
