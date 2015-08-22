module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
    'student',{
      stu_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      stu_name:Sequelize.STRING,
      stu_num: Sequelize.INTEGER,
      stu_pwd: Sequelize.STRING
    });

    queryInterface.createTable(
    'teacher',{
      tea_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tea_name:Sequelize.STRING,
      tea_num: Sequelize.INTEGER,
      tea_pwd: Sequelize.STRING
    });

    queryInterface.createTable(
    'manager',{
      man_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      man_name:Sequelize.STRING,
      man_num: Sequelize.INTEGER,
      man_pwd: Sequelize.STRING
    });

    queryInterface.createTable(
    'exam',{
      exa_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      exa_name:Sequelize.STRING,
      status: Sequelize.BOOLEAN
    });

    queryInterface.createTable(
    'student_exam',{
      stu_exa_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      stu_id:Sequelize.INTEGER,
      exa_id: Sequelize.INTEGER,
      status: Sequelize.BOOLEAN
    });

    queryInterface.createTable(
    'teacher_exam',{
      tea_exa_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tea_id:Sequelize.INTEGER,
      exa_id: Sequelize.INTEGER,
      status: Sequelize.BOOLEAN
    });

    queryInterface.createTable(
    'question',{
      que_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      typ_id:Sequelize.INTEGER,
      tea_id: Sequelize.INTEGER,
      que_content: Sequelize.STRING,
      que_answer: Sequelize.STRING
    });

    queryInterface.createTable(
    'type',{
      typ_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      typ_name: Sequelize.STRING,
      score: Sequelize.INTEGER
    });

    queryInterface.createTable(
    'student_answer',{
      stu_ans_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      stu_id:Sequelize.INTEGER,
      pap_id: Sequelize.INTEGER,
      que_id: Sequelize.INTEGER,
      stu_answer: Sequelize.STRING
    });

    queryInterface.createTable(
    'paper',{
      pap_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tea_id:Sequelize.INTEGER,
      exa_id: Sequelize.INTEGER
    });

    queryInterface.createTable(
    'question_paper',{
      que_pap_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      que_id: Sequelize.INTEGER,
      pap_id: Sequelize.INTEGER
    });

    queryInterface.createTable(
    'score',{
      sco_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      stu_id: Sequelize.INTEGER,
      pap_id: Sequelize.INTEGER,
      score:Sequelize.INTEGER
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('student');
    queryInterface.dropTable('teacher');
    queryInterface.dropTable('manager');
    queryInterface.dropTable('exam');
    queryInterface.dropTable('student_exam');
    queryInterface.dropTable('teacher_exam');
    queryInterface.dropTable('question');
    queryInterface.dropTable('type');
    queryInterface.dropTable('student_answer');
    queryInterface.dropTable('paper');
    queryInterface.dropTable('question_paper');
    queryInterface.dropTable('score');
  }
};
