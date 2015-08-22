
module.exports = function(sequelize, DataTypes) {
  var Paper = sequelize.define('paper', {
    pap_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tea_id: DataTypes.INTEGER,
    exa_id: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    timestamps: false
  });
  return Paper;
};
