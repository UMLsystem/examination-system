module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    studentName: DataTypes.STRING,
    studentNumber: DataTypes.INTEGER,
    studentPassword: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false
  });
  return Student;
};
