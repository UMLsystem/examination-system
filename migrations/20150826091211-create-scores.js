module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.createTable('Scores', {
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
        userId: Sequelize.INTEGER,//答卷人id
        paperId: Sequelize.INTEGER,
        score: Sequelize.INTEGER
      });
  },  

  down: function(queryInterface, Sequelize) {
    queryInterface.dropTable('Scores');
  }
};
