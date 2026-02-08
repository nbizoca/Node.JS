// modulo do node para manipular caminhos de arquivos

const path = require('path');

//basename - retorna o nome do arquivo atual
console.log(path.basename(__filename));

//dirname - retorna o nome do diretorio atual
console.log(path.dirname(__filename));

//extname - retorna a extensao do arquivo
console.log(path.extname(__filename));

// criar objeto Path
console.log(path.parse(__filename));

// juntar caminhos
console.log(path.join(__dirname, 'test', 'test.html'));