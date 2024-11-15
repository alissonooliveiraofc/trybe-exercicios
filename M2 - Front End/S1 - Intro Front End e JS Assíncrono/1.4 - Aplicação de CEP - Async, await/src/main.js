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

    const { bairro, localidade, uf, ddd, estado, logradouro, regiao } = data;

    const info = [
      `<strong style="color: #a2e046;">Logradouro:</strong> ${logradouro}`,
      `<strong style="color: #a2e046;">Bairro:</strong> ${bairro}`,
      `<strong style="color: #a2e046;">Localidade:</strong> ${localidade}`,
      `<strong style="color: #a2e046;">DDD:</strong> ${ddd}`,
      `<strong style="color: #a2e046;">UF:</strong> ${uf}`,
      `<strong style="color: #a2e046;">Estado:</strong> ${estado}`,
      `<strong style="color: #a2e046;">Região:</strong> ${regiao}`,
    ];

    p.forEach((element, index) => {
      element.style.display = "flex";
      element.innerHTML = info[index];
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "CEP inválido",
      confirmButtonText: "Ok",
    });
  }
}
