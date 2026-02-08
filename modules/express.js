//api usando express

const UserModel = require('../src/models/user.model');

const express = require('express');

const app = express();

app.set('view engine', 'ejs'); //configura o EJS como motor de visualização
app.set('views', 'src/views');  //define o diretório onde os arquivos EJS estão localizados


//middlewares (são executadas antes de qualquer requisição)
app.use(express.json()); //para reconhecer o formato json no corpo da requisição

app.use((req, res, next) => {
    console.log('Método:', req.method);
    console.log('URL:', req.url);
    console.log('Content-Type:', req.headers['content-type']);
    console.log('Data e hora:', new Date().toLocaleString());

    next();
})

////////////////////////////////////////////////////////

const port = 8080;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

app.get('/views/users', async(req, res) => {
    const users = await UserModel.find({});

    res.render('index', {users}); //renderiza o arquivo index.ejs e passa a variável users para o template
});

//lista todos os usuários
app.get('/users', async(req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
    }catch (error) {
        return res.status(500).send(error.message);
    }
      
    
})

//cria um usuário novo
app.post('/users',async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);

    } catch (error) {
        res.status(500).send(error.message);

    }
    const user = UserModel.create(req.body)

    return res.status(201).send.json(user);
});

//lista um usuário pelo id
app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);
        res.status(200).json(user);

    } catch (error) {
        return res.status(500).send(error.message);

    }
});

//atualiza um usuário pelo id
app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id,req.body, {new: true});
        res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);

    }
})

//deleta um usuário pelo id
app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await UserModel.findByIdAndDelete(id);
        res.status(204).send(statusMessage = 'Usuário deletado com sucesso');

    } catch (error) {
        return res.status(500).send(error.message);
    }
})

