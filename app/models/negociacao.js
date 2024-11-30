export class Negociacao { 

    // ECMAScript 2015 => (ES6) introduced the concept of private fields in JavaScript.

    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = new Date(data.getTime());
        this.#quantidade = quantidade;
        this.#valor = valor;
    }


    get data() {
        return new Date(this.#data.getTime());
    }

    get quantidade() {
        return this.#quantidade;
    }

    get valor() {
        return this.#valor;
    }

}