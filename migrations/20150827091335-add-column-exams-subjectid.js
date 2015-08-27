module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Exams',
      'subjectId', {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    );
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Exams', 'subjectId');
  }
};
