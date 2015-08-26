module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.createTable('Options', {
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
        questionId: Sequelize.INTEGER,
        option: Sequelize.STRING
      });
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.dropTable('Options');
  }
};
