module.exports = function(sequelize, DataTypes) {
  var StudentAnswer = sequelize.define('StudentAnswers', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    studentId: DataTypes.INTEGER,
    paperId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    answer: DataTypes.STRING
  }, {
    timestamps: false,
    classMethods:{
      associate:function(modules) {

      }
    }
  });
  return StudentAnswer;
};
