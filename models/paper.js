module.exports = function(sequelize, DataTypes) {
  var Paper = sequelize.define('Papers', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: DataTypes.INTEGER,
    examId: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  return Paper;
};
