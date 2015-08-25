module.exports = function(sequelize, DataTypes) {
  var Paper = sequelize.define('paper', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    teacherId: DataTypes.INTEGER,
    examId: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    timestamps: false
  });
  return Paper;
};
