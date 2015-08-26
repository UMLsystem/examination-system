module.exports = function(sequelize, DataTypes) {
  var Type = sequelize.define('Type', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    typeName: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      getAllTypes: function() {
        return Type.findAll();
      }
    }
  });
  return Type;
};
