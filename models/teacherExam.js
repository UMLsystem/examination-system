module.exports = function(sequelize, DataTypes) {
  var TeacherExam = sequelize.define('TeacherExams', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIn3crement: true
      },
      teacherId: DataTypes.INTEGER,
      examId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN
  }, {
      freezeTableName: true,
      timestamps: false
  });
  return TeacherExam;
};
