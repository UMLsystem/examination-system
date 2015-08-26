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
    timestamps: false,
    classMethods: {
      associate: function(model) {
        Option.hasOne(model.Question, {
          foreignKey: {
            name: 'id'
          }
        })
      }
    }
  });
  return Option;
};
