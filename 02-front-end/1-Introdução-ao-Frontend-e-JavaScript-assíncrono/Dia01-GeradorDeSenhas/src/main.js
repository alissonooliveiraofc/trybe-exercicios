import { nanoid } from 'nanoid';
import './style.css';

const buttonPassword = document.querySelector('button');
const h2 = document.querySelector('h2');

buttonPassword.addEventListener('click', () => {
  h2.innerHTML = nanoid();
});

console.log(nanoid());
console.log(h2);
