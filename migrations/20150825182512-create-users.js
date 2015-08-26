module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.createTable('Users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        userRole: Sequelize.STRING,
        userName: Sequelize.STRING,
        userPassword: Sequelize.STRING,
        userNumber: Sequelize.INTEGER(12)
      });
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.dropTable('Users');
  }
};
