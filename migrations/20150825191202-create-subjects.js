module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.createTable('Subjects', {
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
        subjectName: Sequelize.STRING
      });
  },  

  down: function(queryInterface, Sequelize) {
    queryInterface.dropTable('Subjects');
  }
};
