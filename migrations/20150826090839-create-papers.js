module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.createTable('Papers', {
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
        userId: Sequelize.INTEGER,//出卷人id
        examId: Sequelize.INTEGER
      });
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.dropTable('Papers');
  }
};
