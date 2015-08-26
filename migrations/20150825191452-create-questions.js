module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.createTable('Questions', {
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
        userId: Sequelize.INTEGER,//出题人的id
        typeId: Sequelize.INTEGER,
        subjectId: Sequelize.INTEGER,
        question: Sequelize.STRING,
        answer: Sequelize.STRING
      });
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.dropTable('Questions');
  }
};
