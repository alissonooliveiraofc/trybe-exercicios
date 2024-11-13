import Swal from "sweetalert2";

const botao = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelectorAll("p");

botao.addEventListener("click", handleClick);

async function handleClick() {
  const cep = input.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();

    const { rua, bairro, localidade, uf, ddd, estado, logradouro, regiao } =
      data;

    const info = [
      `Bairro: ${bairro}`,
      `Localidade: ${localidade}`,
      `UF: ${uf}`,
      `DDD: ${ddd}`,
      `Estado: ${estado}`,
      `Logradouro: ${logradouro}`,
      `Região: ${regiao}`,
    ];

    p.forEach((element, index) => {
      element.style.display = "block";
      element.textContent = info[index];
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      confirmButtonText: "Ok",
    });
  }
}
