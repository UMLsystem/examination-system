module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
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
    timestamps: false,
  });
  return Question;
};
