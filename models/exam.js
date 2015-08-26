module.exports = function(sequelize, DataTypes) {
    var Exam = sequelize.define('Exam', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        examName: DataTypes.STRING,
        status: DataTypes.BOOLEAN
    }, {
        timestamps: false
    });
    return Exam;
};
