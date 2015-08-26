module.exports = function(sequelize, DataTypes) {
  var Exam = sequelize.define('Exams', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    examName: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    timestamps: false
  });
  return Exam;
};
