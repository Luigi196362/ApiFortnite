require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT ||3300;
console.log(PORT);
server.listen(PORT,()=> console.log('Server is live at localhost:'+PORT));
