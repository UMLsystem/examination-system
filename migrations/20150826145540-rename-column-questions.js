module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('Questions', 'teacherId', 'userId');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('Questions', 'userId', 'teacherId');
  }
};
