module.exports = {
  up: function (queryInterface, Sequelize) {
    migration.renameColumn('exam', 'exam_id', 'exa_id');
    migration.renameColumn('student_exam', 's_exam_id', 'stu_exa_id');
    migration.renameColumn('student_exam', 'exam_id', 'exa_id');
    migration.renameColumn('teacher_exam', 't_exam_id', 'tea_exa_id');
    migration.renameColumn('teacher_exam', 'exam_id', 'exa_id');
    migration.renameColumn('question', 'type_id', 'typ_id');
    migration.renameColumn('student_answer', 's_ans_id', 'stu_ans_id');
    migration.renameColumn('question_paper', 'qp_id', 'que_pap_id');
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
