const ondeEstou = document.getElementById('elementoOndeVoceEsta'); // acessando elemento

const pai = ondeEstou.parentElement; //acessando pai
pai.style.color = 'green';

const primeiroFilhoDoFilho = ondeEstou.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Adicionando Texto';

const primeiroFilho = pai.firstElementChild;
const primeiroFilho2 = ondeEstou.previousElementSibling;

const texto = ondeEstou.nextSibling;
// console.log(texto);

const terceiroFilho = ondeEstou.nextElementSibling;
// console.log(terceiroFilho);

const terceiroFilho2 = pai.lastElementChild.previousElementSibling;