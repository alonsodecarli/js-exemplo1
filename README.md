
# Estudo de Caso de JavaScript - erro em execução
## Case Study: (ES6) introduced the concept of private fields in JavaScript.


Iniciar o projeto, cria o package.json
```
npm init -y
```

Rodar o código
``` 
node app/index.js
```


## Case Study

Ao rodar o código: 

```
const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao);

// The following code will not work because the fields are private.
negociacao.quantidade = 1000;  // aqui vai dar erro em execução, e não em compilação
console.log(negociacao);
```

acontecerá um erro em tempo de execução:
```
node app/index.js
Negociacao {}
file:///media/alonso.decarli/Dados/workspace-learning/type-script/alura/formacao-type-script/exemplo1/app/index.js:11
negociacao.quantidade = 1000;  // aqui vai dar erro em execução, e não em compilação
                      ^

TypeError: Cannot set property quantidade of #<Negociacao> which has only a getter
    at file:///media/alonso.decarli/Dados/workspace-learning/type-script/alura/formacao-type-script/exemplo1/app/index.js:11:23
    at ModuleJob.run (node:internal/modules/esm/module_job:195:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:337:24)
    at async loadESM (node:internal/process/esm_loader:34:7)
    at async handleMainPromise (node:internal/modules/run_main:106:12)

Node.js v18.20.4
```

