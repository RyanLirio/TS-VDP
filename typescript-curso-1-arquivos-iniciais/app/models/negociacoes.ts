import { Negociacao } from "./negociacao";

export class Negociacoes{
    private negociacoes: Array<Negociacao > = []; // == private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);

    }
    // == lista(): readonly Negociacao[]
    public lista(): ReadonlyArray<Negociacao>{//readonly permite somente a leitura do array mas funciona igual ao ARRAY<>
        return this.negociacoes;
    }
}

//const negociacoes = new Negociacoes();

//negociacoes.adiciona(negociacao)

//negociacoes.lista().forEach(n => {
  //  n.volume;
//})



