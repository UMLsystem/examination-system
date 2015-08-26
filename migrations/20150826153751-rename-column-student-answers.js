module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('StudentAnswers', 'studentId', 'userId');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('StudentAnswers', 'userId', 'studentId');
  }
};
