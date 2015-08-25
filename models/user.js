module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userRole:DataTypes.STRING,
    userName: DataTypes.STRING,
    userNumber: DataTypes.INTEGER,
    userPassword: DataTypes.STRING
  }, {
    timestamps: false
  });
  return User;
};
