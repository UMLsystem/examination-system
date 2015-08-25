module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Questions', {
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
