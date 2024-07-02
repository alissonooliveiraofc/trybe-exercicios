const pai = document.getElementById('pai');
const ondeEstou = document.querySelector('#elementoOndeVoceEsta');
const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

const irmaoDeOndeEstou = document.createElement('section');
pai.appendChild(irmaoDeOndeEstou);
irmaoDeOndeEstou.id = 'irmaoDeOndeEstou';

const terceiroFilhoCriado = document.createElement('section');
terceiroFilhoCriado.id = 'terceiroFilhoCriado';
ondeEstou.appendChild(terceiroFilhoCriado);

const filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id='filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

const terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);