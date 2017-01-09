
### Searcher Parse Electron

Searcher Parse Electron é um componente HTML de buscas com [Parse Server](https://parse.com/) rodando no backend e rodando no [Electron](http://electron.atom.io/).

### Instalação

Clone o projeto:
```
git clone https://github.com/marcoribeirojr/searcher-parse-electron.git

```
Insira as informações de seu projeto registrado no Parse Server no arquivo `renderer.js` que se encontra na raiz do projeto:
```
const appId = "YOUR APP ID";
const jsKey = "YOUR JS KEY";
const url = "URL";
const model = "MODEL";
```
### Executando o programa
```
npm start
```

### Rodando Testes
```
npm t
```

### Dependências
- angular
- parse
- code42day-rating

### Dev Dependências
- babel-jest
- babel-preset-es2015
- electron
- gulp
- gulp-minify-css
- gulp-notify
- jest-cli

### Licença
MIT
