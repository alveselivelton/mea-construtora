const menu = document.querySelector(".cabecalho i");
const ul = document.querySelector(".cabecalho ul");
const form = document.querySelector(".form-contato");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputMessage = document.querySelector("#message");

menu.addEventListener("click", () => {
  if (ul.classList.contains("open")) {
    ul.classList.remove("open");
  } else {
    ul.classList.add("open");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputName.value = "";
  inputEmail.value = "";
  inputMessage.value = "";
});
