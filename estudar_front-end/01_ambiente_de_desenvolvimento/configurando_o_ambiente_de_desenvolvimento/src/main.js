import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const button = document.querySelector('button');
const main = document.querySelector('main');
const displayPasswordEl = document.querySelector('h2');

const randomPassword = nanoid();

const message = 'Copiado com sucesso!';

button.addEventListener('click', () => {
  displayPasswordEl.innerHTML = randomPassword;
});

displayPasswordEl.addEventListener('click', () => {
  copy(randomPassword);
  const newH2 = document.createElement('h2');
  newH2.innerHTML = message;
  main.appendChild(newH2);
});
