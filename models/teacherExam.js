module.exports = function(sequelize, DataTypes) {
    var TeacherExam = sequelize.define('teacherExam', {
        tea_exa_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIn3crement: true
        },
        tea_id: DataTypes.INTEGER,
        exa_id: DataTypes.INTEGER,
        status: DataTypes.BOOLEAN
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return TeacherExam;
};
