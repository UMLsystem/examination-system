module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('question', {
      id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    typeId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER,
    question: DataTypes.STRING,
    answer: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false,
    classMethods: {
      getQuestionContents: function(data) {
        var questionIds = data.map(function(val) {
          return val.dataValues.questionId;
        });
        return Question.findAll({
          where: {
            questionId: {
              $in: questionIds
            }
          }
        });
      }
    }
  });
  return Question;
};
