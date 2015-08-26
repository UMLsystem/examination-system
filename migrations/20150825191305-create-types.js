module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.createTable('Types', {
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
        typeName: Sequelize.STRING,
        score: Sequelize.INTEGER
      });
  },  

  down: function(queryInterface, Sequelize) {
    queryInterface.dropTable('Types');
  }
};
