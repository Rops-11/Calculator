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
        let input = document.querySelector<HTMLInputElement>('.input')!;
        document.querySelector<HTMLInputElement>('.input')!.value =
          hellos[Math.floor(Math.random() * hellos.length)];
        calc.helloActive = false;
        setTimeout(() => ((input.value = ''), (calc.helloActive = true)), 1000);
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
      input.value = 'Goodbye';
      setTimeout(() => ((input.placeholder = ''), (input.value = '')), 1000);
      calc.active = false;
      localStorage.setItem(storageKey, JSON.stringify(calc));
    }
  };
  byeButton.addEventListener('click', () => bye());
};
