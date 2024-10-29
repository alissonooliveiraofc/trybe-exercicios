// const cep = '31680-050'; -------------------------------COM .THEN
// fetch(`https://viacep.com.br/ws/${cep}/json/`)
//   .then(response => response.json())
//   .then(data => console.log(data));
//   .catch((error) => console.log(error.message));

//--------------------------------------------------COM ASYNC E AWAIT
const cep = '33930-175';
const buscaCep = async (cep) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  
};

buscaCep(cep);

// // const a = funcaoQueRetornaPromise(); ----------------FUNCIONAMENTO DO AWAIT
// // const b = await funcaoQueRetornaPromise();

// console.log(a) // Aqui o console vai imprimir a Promise em si. --- CODIGO CONTINUA E IMPRIME A PROMISSE EM SI
// console.log(b) // Aqui o console vai imprimir o resultado da Promise ------ CÓDIGO PAUSADO E IMPRIME A RESPONSE DA PROMISSE