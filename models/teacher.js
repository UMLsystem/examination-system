module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      teacherName: DataTypes.STRING,
      teacherNumber: DataTypes.INTEGER,
      teacherPassword: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false
  });
  return Teacher;
};
