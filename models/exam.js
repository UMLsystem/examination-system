module.exports = function(sequelize, DataTypes) {
    var Exam = sequelize.define('exam', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        examName: DataTypes.STRING,
        status: DataTypes.BOOLEAN
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return Exam;
};
