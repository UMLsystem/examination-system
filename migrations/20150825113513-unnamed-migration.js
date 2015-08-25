module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.dropTable('exam');
    queryInterface.dropTable('question_paper');
    queryInterface.dropTable('score');
    queryInterface.dropTable('student');
    queryInterface.dropTable('student_answer');
    queryInterface.dropTable('student_exam');
    queryInterface.dropTable('subject');
    queryInterface.dropTable('teacher');
    queryInterface.dropTable('teacher_exam');
    queryInterface.dropTable('type');
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
