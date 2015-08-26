module.exports = function(sequelize, DataTypes) {
  var Paper = sequelize.define('Paper', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    teacherId: DataTypes.INTEGER,
    examId: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  return Paper;
};
