module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'Users',
      'userNumber', {
        type: Sequelize.STRING,
        allowNull: false,
      }
    );
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'Users',
      'userNumber', {
        type: Sequelize.INTEGER
      }
    );
  }
};
