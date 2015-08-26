module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.dropTable('Managers');
    queryInterface.dropTable('StudentExams');
    queryInterface.dropTable('Students');
    queryInterface.dropTable('TeacherExams');
    queryInterface.dropTable('Teachers');
    queryInterface.dropTable('manager');
    queryInterface.dropTable('paper');
    queryInterface.dropTable('question');
    queryInterface.dropTable('question_paper');
    queryInterface.dropTable('score');
    queryInterface.dropTable('student');
    queryInterface.dropTable('student_exam');
    queryInterface.dropTable('teacher_exam');
    queryInterface.dropTable('teacher');
    queryInterface.dropTable('type');
    queryInterface.dropTable('subject');
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
