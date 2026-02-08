const mongoose =  require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true, //torna o atributo obrigatorio
        minlength: 7 //tamanho minimo
    }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;