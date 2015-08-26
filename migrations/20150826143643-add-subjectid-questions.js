module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Questions',
      'subjectId', {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    );
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Questions', 'subjectId');
  }
};
