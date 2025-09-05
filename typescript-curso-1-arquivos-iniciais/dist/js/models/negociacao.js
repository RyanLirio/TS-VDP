export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        return this._data;
    }
    set data(nova_data) {
        this._data = nova_data;
    }
    get quantidade() {
        return this._quantidade;
    }
    set quantidade(nova_quantidade) {
        this._quantidade = nova_quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
