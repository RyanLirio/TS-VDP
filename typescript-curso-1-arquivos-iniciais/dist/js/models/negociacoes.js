export class Negociacoes {
    constructor() {
        this.negociacoes = []; // == private negociacoes: Negociacao[] = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // == lista(): readonly Negociacao[]
    lista() {
        return this.negociacoes;
    }
}
//const negociacoes = new Negociacoes();
//negociacoes.adiciona(negociacao)
//negociacoes.lista().forEach(n => {
//  n.volume;
//})
