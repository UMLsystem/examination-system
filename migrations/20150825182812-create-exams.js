module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.createTable('Exams', {
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
        userId:Sequelize.INTEGER,
        examName: Sequelize.STRING,
        status: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false
        }
      });
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.dropTable('Exams');
  }
};
