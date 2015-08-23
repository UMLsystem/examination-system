module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('student', {
    stu_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stu_name: DataTypes.STRING,
    stu_num: DataTypes.INTEGER,
    stu_pwd: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false
  });
  return Student;
};
