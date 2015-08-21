var Sequelize = require('sequelize');
var sequelize = new Sequelize('exam_system', 'exam', 'exam', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

module.exports = sequelize;
