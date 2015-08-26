module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.createTable('QuestionPapers', {
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
        paperId: Sequelize.INTEGER
      });
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.dropTable('QuestionPapers');
  }
};
