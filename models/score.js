module.exports = function(sequelize, DataTypes) {
  var Score = sequelize.define('Scores', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    studentId: DataTypes.INTEGER,
    paperId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    timestamps: false,
    classMethods:{
      associate:function(modules) {
        
      }
    }
  });
  return Score;
};
