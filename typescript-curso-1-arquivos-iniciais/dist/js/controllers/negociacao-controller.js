import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g; //expressão regular /-/ e o g é de global pois eu quero todos os "-"
        const date = new Date(this.inputData.value.replace(exp, ",")); // um date em js deve ser separado por virgula(que bocozisse)
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
        /*const negociacao = new Negociacao(
            this.inputData.valueAsDate, //value pega sempre como string, logo, ja da pra converter o value aqui mesmo pro tipo desejado
            this.inputQuantidade.valueAsNumber,
            this.inputValor.valueAsNumber
        );*/
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputQuantidade.focus();
    }
}
