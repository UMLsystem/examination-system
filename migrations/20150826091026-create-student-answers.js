module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.createTable('StudentAnswers', {
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
        questionId: Sequelize.INTEGER,
        paperId: Sequelize.INTEGER,
        answer: Sequelize.STRING
      });  
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.dropTable('StudentAnswers');
  }
};
