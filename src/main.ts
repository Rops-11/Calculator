import { hello, bye } from './components/greetings';
import { solve } from './components/solve';
import { valueHandler } from './components/valueHandler';
import './style.css';

export const storageKey = 'Calculator';
export const invalidMultiples: string[] = ['+', '-', 'x', '÷', '.'];


export type Calculator = {
  active: boolean;
  helloActive: boolean;
};

let calc: Calculator = {
  active: false,
  helloActive: true,
};

document.querySelector<HTMLDivElement>('.app')!.innerHTML = /*html*/ `
  <div class="interface">
    <div class="inputContainer">
      <label class='brand'>CASIO</label>
      <input class='input' placeholder='' disabled/>
    </div>
    <div class='buttonContainer'>
      <div class='communicate'>
        <button class="hello">Hello</button>
        <button class="bye">Bye</button>
      </div>
    </div>
      <div class="gridContainer">
        <button class="allClear" id="value">AC</button>
        <button class="backspace" id="value">
          <img src="/assets/backspace.png" class="backspaceImg" reversed=true/>
        </button>
        <button class="divide" id="value">÷</button>
        <button class="multiply" id="value">x</button>

        <button class="seven" id="value">7</button>
        <button class="eight" id="value">8</button>
        <button class="nine" id="value">9</button>  
        <button class="minus" id="value">-</button>  

        <button class="four" id="value">4</button>
        <button class="five" id="value">5</button>
        <button class="six" id="value">6</button>
        <button class="plus" id="value">+</button>  

        <button class="one" id="value">1</button>
        <button class="two" id="value">2</button>
        <button class="three" id="value">3</button>

        <button class="zero" id="value">0</button> 
        <button class="point" id="value">.</button>  
        <button class="equals">=</button>  
      </div>
    </div>
  </div>
`;

valueHandler(
  document.querySelector<HTMLDivElement>('.gridContainer')!,
  document.querySelector<HTMLInputElement>('.input')!,
  calc
);

solve(document.querySelector<HTMLButtonElement>('.equals')!);

hello(document.querySelector<HTMLButtonElement>('.hello')!, calc);

bye(document.querySelector<HTMLButtonElement>('.bye')!, calc);

if (calc.active) {
  const storage = JSON.parse(localStorage.getItem(storageKey)!);
  calc = storage;
}
