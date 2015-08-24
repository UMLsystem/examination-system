module.exports = function(sequelize, DataTypes) {
  var Type = sequelize.define('type', {
    typ_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    typ_name: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    timestamps: false,
    classMethods: {
      getAllTypes: function() {
        return Type.findAll().then(function(data) {
          types = data.map(function(val) {
            return val.dataValues;
          });
        });
      }
    }
  });
  return Type;
};
