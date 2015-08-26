module.exports = function(sequelize, DataTypes) {
  var Option = sequelize.define('Option', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    questionId: DataTypes.STRING,
    option: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(model) {
        Option.belongsTo(model.Question, {
          foreignKey: 'id'
        });
      }
    }
  });
  return Option;
};
