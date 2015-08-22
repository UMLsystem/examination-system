module.exports = function(sequelize, DataTypes) {
  var QuestionPaper = sequelize.define('question_paper', {
    qp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    que_id: DataTypes.INTEGER,
    pap_id: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    timestamps: false
  });
  return QuestionPaper;
}
