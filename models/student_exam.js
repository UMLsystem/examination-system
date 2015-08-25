module.exports = function(sequelize, DataTypes) {
  var StudentExam = sequelize.define('student_exam', {
    stu_exa_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stu_id: DataTypes.INTEGER,
    exa_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
  }, {
    freezeTableName: true,
    timestamps: false
  });
  return StudentExam;
};
