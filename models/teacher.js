module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('teacher', {
    tea_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tea_name: DataTypes.STRING,
    tea_num: DataTypes.INTEGER,
    tea_pwd: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false
  });
  return Teacher;
};
