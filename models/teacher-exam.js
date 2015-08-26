module.exports = function(sequelize, DataTypes) {
  var TeacherExam = sequelize.define('TeacherExam', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    teacherId: DataTypes.INTEGER,
    examId: DataTypes.INTEGER
  }, {
    timestamps: false,
    classMethods: {
      associate: function(modules) {
        
      }
    }
  });
  return TeacherExam;
};
