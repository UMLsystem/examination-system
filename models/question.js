var sequelize = require('../db-connection/connection');
module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('question', {
    que_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type_id:DataTypes.INTEGER,
    tea_id: DataTypes.INTEGER,
    que_content: DataTypes.STRING,
    que_answer: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false
  });
  return Question;
}
