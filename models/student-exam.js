module.exports = function(sequelize, DataTypes) {
  var StudentExam = sequelize.define('StudentExams', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    studentId: DataTypes.INTEGER,
    examId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    timestamps: false,
    classMethods:{
      associate:function(modules) {


      }
    }
  });
  return StudentExam;
};
