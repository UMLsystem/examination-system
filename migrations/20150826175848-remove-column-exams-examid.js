module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Exams', 'examId');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
          'Exams',
          'examId', {
            type: Sequelize.INTEGER,
            allowNull: false
          }
        );
  }
};
