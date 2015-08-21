module.exports = {
  up: function (migration, DataTypes) {
    migration.createTable(
    'student',{
      stu_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      stu_name:DataTypes.STRING,
      stu_num: DataTypes.INTEGER,
      stu_pwd: DataTypes.STRING
    });

    migration.createTable(
    'teacher',{
      tea_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tea_name:DataTypes.STRING,
      tea_num: DataTypes.INTEGER,
      tea_pwd: DataTypes.STRING
    });

    migration.createTable(
    'manager',{
      man_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      man_name:DataTypes.STRING,
      man_num: DataTypes.INTEGER,
      man_pwd: DataTypes.STRING
    });

    migration.createTable(
    'exam',{
      exa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      exa_name:DataTypes.STRING,
      status: DataTypes.BOOLEAN
    });

    migration.createTable(
    'student_exam',{
      stu_exa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      stu_id:DataTypes.INTEGER,
      exa_id: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN
    });

    migration.createTable(
    'teacher_exam',{
      tea_exa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tea_id:DataTypes.INTEGER,
      exa_id: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN
    });

    migration.createTable(
    'question',{
      que_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type_id:DataTypes.INTEGER,
      tea_id: DataTypes.INTEGER,
      que_content: DataTypes.STRING,
      que_answer: DataTypes.STRING
    });

    migration.createTable(
    'student_answer',{
      stu_ans_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      stu_id:DataTypes.INTEGER,
      pap_id: DataTypes.INTEGER,
      que_id: DataTypes.INTEGER,
      stu_answer: DataTypes.STRING
    });

    migration.createTable(
    'paper',{
      pap_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tea_id:DataTypes.INTEGER,
      exa_id: DataTypes.INTEGER
    });

    migration.createTable(
    'question_paper',{
      qp_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      que_id: DataTypes.INTEGER,
      pap_id: DataTypes.INTEGER
    });

    migration.createTable(
    'score',{
      sco_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      stu_id: DataTypes.INTEGER,
      pap_id: DataTypes.INTEGER,
      score:DataTypes.INTEGER
    });
  },

  down: function (queryInterface, Sequelize) {
    migration.dropTable('student');
    migration.dropTable('teacher');
    migration.dropTable('manager');
    migration.dropTable('exam');
    migration.dropTable('student_exam');
    migration.dropTable('teacher_exam');
    migration.dropTable('question');
    migration.dropTable('student_answer');
    migration.dropTable('paper');
    migration.dropTable('question_paper');
    migration.dropTable('score');
  }
};
