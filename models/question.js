module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
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
  },{
    classMethods: {
      associate: function(model) {
        Question.belongsTo(model.Type, {
          foreignKey: {
            name: 'typeId'
          }
        });
      }
    }
  });
  return Question;
};
