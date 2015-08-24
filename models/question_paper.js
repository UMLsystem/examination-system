module.exports = function(sequelize, DataTypes) {
  var QuestionPaper = sequelize.define('question_paper', {
    que_pap_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    que_id: DataTypes.INTEGER,
    pap_id: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    timestamps: false,
    ClassMethods: {
      getQuestionIds: function(exa_id, data) {
        var paper_id = data.dataValues.pap_id;
        return QuestionPaper.findAll({
          where: {
            pap_id: paper_id
          }
        });
      }
    }
  });
  return QuestionPaper;
};
