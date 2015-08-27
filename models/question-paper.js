module.exports = function(sequelize, DataTypes) {
  var Sequelize = require('sequelize');
  var QuestionPaper = sequelize.define('QuestionPaper', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    questionId: DataTypes.INTEGER,
    paperId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(model) {
        QuestionPaper.hasMany(model.Question, {
          foreignKey: {
            name: 'id'
          }
        });
        QuestionPaper.belongsTo(model.Paper, {
          foreignKey: 'id'
        });
      },
      getQuestions: function(examId, Paper, Question) {
        return QuestionPaper.findAll({
          include: [{
            model: Paper,
            where: {
              examId: examId,
              id: Sequelize.col('QuestionPaper.paperId')
            }
          }],
          include: [{
            model: Question,
            where: {
              id: Sequelize.col('QuestionPaper.questionId')
            }
          }]
        })
      }
    }
  });
  return QuestionPaper;
};
