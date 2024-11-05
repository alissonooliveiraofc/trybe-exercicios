import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const img = document.querySelector("img");
const heroName = document.querySelector("#hero-name");
const button = document.querySelector("button");

heroName.style.fontWeight = "bold";
heroName.style.textTransform = "uppercase";
button.style.textTransform = "uppercase";

const randomNumber = () => Math.ceil(Math.random() * 731);

button.addEventListener("click", (event) => {
  event.preventDefault();
  fetch(
    `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randomNumber()}.json`
  )
    .then((response) => response.json())
    .then(({ images, name }) => {
      img.src = images.md;
      heroName.innerText = name;
    })
    .catch((error) => {
      Swal.fire({
        title: "Herói não encontrado",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    });
});
