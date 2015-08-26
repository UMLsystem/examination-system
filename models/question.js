module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Questions', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER,
    question: DataTypes.STRING,
    answer: DataTypes.STRING
  }, {
    timestamps: false,
    classMethods: {
      associate: function(model) {
        Question.hasOne(model.Users, {
          foreignKey: {
            name: 'id'
          }
        });

        Question.hasOne(model.Types, {
          foreignKey: {
            name: 'id'
          }
        });

        Question.hasOne(model.Exams, {
          foreignKey: {
            name: 'id'
          }
        });

        Question.hasOne(model.Subjects, {
          foreignKey: {
            name: 'id'
          }
        });
      },

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
