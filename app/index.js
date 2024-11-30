import { Negociacao } from "./models/negociacao.js";

// ECMAScript 2015 => (ES6) introduced the concept of private fields in JavaScript.
// This is a feature that allows you to define private fields in a class,
// which are only accessible within the class itself.

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao);

// The following code will not work because the fields are private.
negociacao.quantidade = 1000;  // aqui vai dar erro em execução, e não em compilação
console.log(negociacao);


// The field is created, but it is not part of the class
negociacao.qtde = 1000;



