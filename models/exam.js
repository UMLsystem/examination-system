var sequelize = require('../db-connection/connection');

module.exports = function(sequelize, DataTypes) {
    var Exam = sequelize.define('exam', {
        exa_id: DataTypes.INTEGER,
        exa_name: DataTypes.STRING,
        status: DataTypes.BOOLEAN
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return Exam;
}
