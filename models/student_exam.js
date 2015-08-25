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
    freezeTableName: true,
    timestamps: false,
    classMethods:{
      associate:function(modules) {


      }
    }
  });
  return StudentExam;
};
