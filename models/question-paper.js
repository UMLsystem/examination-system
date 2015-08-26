module.exports = function(sequelize, DataTypes) {
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
        QuestionPaper.belongsTo(model.Paper,{
          foreignKey:'id'
        });
      }
    }
  });
  return QuestionPaper;
};
