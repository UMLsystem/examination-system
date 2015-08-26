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
    timestamps: false,
    classMethods: {
      associate: function(model) {
        QuestionPaper.hasMany(model.Question, {
          foreignKey: {
            name: 'id'
          }
        })
      }
    }
  });
  return QuestionPaper;
};
