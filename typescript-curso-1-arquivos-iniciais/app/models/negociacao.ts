export class Negociacao{
    /*private _data: Date; //# = atributo privado
    private _quantidade: number;
    private _valor: number;
    */
    constructor(
        private _data: Date, //# = atributo privado
        public readonly quantidade: number,
        public readonly valor: number
    ){
        /*this._data = data;
        this._quantidade = quantidade;
        this._valor = valor; *///declarando nos parametros as variaveis ele atribui automaticamente para as variaveis, reduzindo codigo
    }

    /*get data(): Date{
        return this._data;
    }*///Não é necessario mais por conta do public readonly

    get volume(){
        return this.quantidade * this.valor;
    }

    get data(): Date{
        const data = new Date(this._data.getTime())
        return data;
    }//isso é um metodo de prog defensiva onde a primeira data inserida não poderá ser modificada

}