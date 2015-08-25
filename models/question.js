module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    que_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    typ_id: DataTypes.INTEGER,
    tea_id: DataTypes.INTEGER,
    que_content: DataTypes.STRING,
    que_answer: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false,
    classMethods: {
      getQuestionContents: function(data) {
        var question_ids = data.map(function(val) {
          return val.dataValues.que_id;
        });
        return Question.findAll({
          where: {
            que_id: {
              $in: question_ids
            }
          }
        });
      }
    }
  });
  return Question;
};
