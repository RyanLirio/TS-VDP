export abstract class View<T>{// o <T> é um generic, permite usarmos varios tipos de tipos de entradas como paramentros  
    protected elemento: HTMLElement;
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)!;
    }   

    update(model: T):void{
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    abstract template(model: T):string;//sse template é pra ser sobreescrito pelo que for herdado, se não for, exibe esse erro
}  

