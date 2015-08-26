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
        Question.hasOne(model.Users, {
          foreignKey: {
            name: 'id'
          }
        });

        Question.hasOne(model.Papers, {
          foreignKey: {
            name: 'id'
          }
        });
      }
    }
  });
  return Score;
};
