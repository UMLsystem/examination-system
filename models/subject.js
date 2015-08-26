module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define('Subjects', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    subjectName: DataTypes.STRING
  }, {
    timestamps: false
  });
  return Subject;
};
