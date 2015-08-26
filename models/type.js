module.exports = function(sequelize, DataTypes) {
  var Type = sequelize.define('Types', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    typeName: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    timestamps: false,
    classMethods: {
      getAllTypes: function() {
        return Type.findAll();
      }
    } 
  });
  return Type;
};
