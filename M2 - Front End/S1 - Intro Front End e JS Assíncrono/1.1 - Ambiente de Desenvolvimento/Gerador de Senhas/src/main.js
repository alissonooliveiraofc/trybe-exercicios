import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const buttonPassword = document.querySelector('button');
const h2 = document.querySelector('h2');

buttonPassword.addEventListener('click', () => {
  h2.innerHTML = nanoid();
  h2.style.color = '#e8a4f0';
  h2.style.cursor = 'pointer';
});

h2.addEventListener('click', (event) => {
  copy(event.target.innerText);
  event.target.innerText = 'Copiado!';
  event.target.style = 'color: green';
});

h2.style.cursor = 'pointer';
