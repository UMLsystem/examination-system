module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('Scores', 'studentId', 'userId');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('Scores', 'userId', 'studentId');
  }
};
