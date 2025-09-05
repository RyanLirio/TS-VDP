import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault(); //cancela o comportamento padrao do formulario que é recarregar a pagina
    controller.adiciona();
})
