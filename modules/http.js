// sem usar express

const http = require('http');

const port = 8080;


const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Bem vindo a pagina home</h1>');
    }

    if (req.url === '/users') {
        const users = [
            {nome: 'João', telefone: '1234-5678'},
            {nome: 'Maria', telefone: '9876-5432'},
            {nome: 'Pedro', telefone: '4567-8901'}
        ];

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users)); //trasnforma o array em JSON
    }
})

server.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
});