const dogBtn = document.querySelector("#dog-btn");
const catBtn = document.querySelector("#cat-btn");
const randomBtn = document.querySelector("#random-btn");
const img = document.querySelector("#img-element");
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

// BOTÃO DOS DOGS
dogBtn.addEventListener("click", (event) => {
  event.preventDefault();
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then(({ message }) => {
      img.src = message;
    })
    .catch((error) => {
      Swal.fire({
        title: "O DOG fugiu! Tente de novo! - Erro da API",
        icon: "error",
        confirmButtonText: "OK",
      });
    });
});

// BOTÃO DOS CATS
catBtn.addEventListener("click", (event) => {
  event.preventDefault();
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((response) => {
      img.src = response[0].url;
    })
    .catch((error) => {
      Swal.fire({
        title: "O gato te abandonou! - Erro da API",
        icon: "error",
        confirmButtonText: "OK",
      });
    });
});

// BOTÃO RANDOM
randomBtn.addEventListener("click", () => {
  const startTime = Date.now();
  Promise.any([
    fetch("https://api.thecatapi.com/v1/images/search").then((response) =>
      response.json()
    ),
    fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
      response.json()
    ),
  ])
    .then((data) => {
      const result = data.message || data[0].url;
      const endTime = Date.now();
      console.log("API responded:", data.message ? "Dog API" : "Cat API");
      console.log("Response time:", endTime - startTime, "ms");
      img.src = result;
    })
    .catch((error) => {
      Swal.fire({
        title: "Seu dog ou seu gato foi doado - Erro da API",
        icon: "error",
        confirmButtonText: "OK",
      });
    });
});
