module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Eaxms',
      'subjectId', {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    );
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Eaxms', 'subjectId');
  }
};
