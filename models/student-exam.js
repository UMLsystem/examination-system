module.exports = function(sequelize, DataTypes) {
  var StudentExam = sequelize.define('StudentExam', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    studentId: DataTypes.INTEGER,
    examId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        StudentExam.hasOne(models.Exam, {
          foreignKey: {
            name: 'id'
          }
        });
      }
    }
  });
  return StudentExam;
};
