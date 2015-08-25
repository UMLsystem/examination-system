module.exports = function(sequelize, DataTypes) {
    var Exam = sequelize.define('Exams', {
        exa_id: {
            primaryKey: true,
            type:DataTypes.INTEGER
        },
        exa_name: DataTypes.STRING,
        status: DataTypes.BOOLEAN
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return Exam;
};
