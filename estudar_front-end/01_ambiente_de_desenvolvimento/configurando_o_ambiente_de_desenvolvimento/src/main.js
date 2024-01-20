import { nanoid } from 'nanoid';

const button = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

button.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});
