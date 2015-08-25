module.exports = function(sequelize, DataTypes) {
  var QuestionPaper = sequelize.define('questionPaper', {
      id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    questionId: DataTypes.INTEGER,
    paperId: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    timestamps: false,
    classMethods: {
      getQuestionIds: function(examId, data) {
        var paperId = data.dataValues.paperId;
        return QuestionPaper.findAll({
          where: {
            paperId: paperId
          }
        });
      }
    }
  });
  return QuestionPaper;
};
