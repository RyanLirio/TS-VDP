import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 12.99);
console.log(negociacao.volume);
