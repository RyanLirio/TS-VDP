export class Negociacao {
    /*private _data: Date; //# = atributo privado
    private _quantidade: number;
    private _valor: number;
    */
    constructor(_data, //# = atributo privado
    _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
        /*this._data = data;
        this._quantidade = quantidade;
        this._valor = valor; */ //declarando nos parametros as variaveis ele atribui automaticamente para as variaveis, reduzindo codigo
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
