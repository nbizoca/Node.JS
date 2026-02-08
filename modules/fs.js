const fs = require('fs');
const path = require('path');

//criaa pasta no diretorio atual
//fs.mkdirSync(path.join(__dirname, '/teste'), (error) => {
//    if (error) {
 //       return console.log('erro ao criar a pasta');
 //   }

//    console.log('pasta criada com sucesso');
//});

//criar um arquivo
fs.writeFile(path.join(__dirname, '/teste', 'teste.txt'), 'olá mundo!', (error) => {
    if (error) {
        return console.log('erro ao criar o arquivo');
    };

    console.log('arquivo criado com sucesso');


})

//adicionar á um arquivo
fs.appendFile(path.join(__dirname, '/teste', 'teste.txt'), '\nOlá mundo, tudo bem?', (error) => {
    if (error) {
        return console.log('erro ao adicionar ao arquivo');
    }
    console.log('arquivo alterado com sucesso');
});

//ler arquivos
fs.readFile(path.join(__dirname, '/teste', 'teste.txt'), 'utf-8', (error, data) => {
    if (error) {
        return console.log('erro ao ler o arquivo');
    }

    console.log(data);
});