const typeorm = require('typeorm');
const db = async () => await typeorm.createConnection();

module.exports =  db ;
