export class Negociacao{
    #data; //# = atributo privado
    #quantidade;
    #valor;

    constructor(data, quantidade, valor){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor; 
    }

    get data(){
        return this.#data;
    }

    set data(nova_data){
        this.#data = new_data
    }

    get quantidade(){
        return this.#quantidade;
    }

    set quantidade(nova_quantidade){
        this.#quantidade;
    }

    get valor(){
        return this.#valor;
    }

    get volume(){
        return this.#quantidade * this.#valor;
    }

}