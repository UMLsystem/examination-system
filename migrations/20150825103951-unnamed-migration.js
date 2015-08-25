module.exports = {
  up: function(queryInterface, Sequelize) {
      return queryInterface.createTable(
        'Students', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          studentName: Sequelize.STRING,
          studentNumber: Sequelize.INTEGER,
          studentPassword: Sequelize.STRING
        }).then(function() {
        return queryInterface.createTable(
          'Teachers', {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            teacherName: Sequelize.STRING,
            teacherNumber: Sequelize.INTEGER,
            teacherPassword: Sequelize.STRING
          });
      }).then(function() {
        return queryInterface.createTable(
          'Managers', {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            managerName: Sequelize.STRING,
            managerNumber: Sequelize.INTEGER,
            managerPassword: Sequelize.STRING
          });
      }).then(function() {
        return queryInterface.createTable(
          'Exams', {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            examName: Sequelize.STRING,
            status: Sequelize.BOOLEAN
          });
      }).then(function() {
        return queryInterface.createTable(
          'StudentExams', {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            studentId: Sequelize.INTEGER,
            examId: Sequelize.INTEGER,
            status: Sequelize.BOOLEAN
          });
      }).then(function() {
        return queryInterface.createTable(
          'TeacherExams', {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIn3crement: true
            },
            teacherId: Sequelize.INTEGER,
            examId: Sequelize.INTEGER,
            status: Sequelize.BOOLEAN
          });
      }).then(function() {
        return queryInterface.createTable(
          'Types', {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            typeName: Sequelize.STRING,
            score: Sequelize.INTEGER
          });
      }).then(function() {
        return queryInterface.createTable(
          'Scores', {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            studentId: Sequelize.INTEGER,
            paperId: Sequelize.INTEGER,
            score: Sequelize.INTEGER
          });
      }).then(function() {
        return queryInterface.createTable(
          'Subjects', {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            subjectName: Sequelize.INTEGER,
          });
      }).then(function() {
        return queryInterface.createTable(
          'Questions', {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            typeId: Sequelize.INTEGER,
            teacherId: Sequelize.INTEGER,
            question: Sequelize.STRING,
            answer: Sequelize.STRING
          });
      }).then(function() {
        return queryInterface.createTable(
          'Papers', {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            teacherId: Sequelize.INTEGER,
            examId: Sequelize.INTEGER
          });
      }).then(function() {
        return queryInterface.createTable(
          'QuestionPapers', {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            questionId: Sequelize.INTEGER,
            paperId: Sequelize.INTEGER
          });
      }).then(function() {
        return queryInterface.createTable(
          'StudentAnswers', {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            studentId: Sequelize.INTEGER,
            paperId: Sequelize.INTEGER,
            questionId: Sequelize.INTEGER,
            answer: Sequelize.STRING
          });
      });
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.dropTable('Students');
    queryInterface.dropTable('Teachers');
    queryInterface.dropTable('Managers');
    queryInterface.dropTable('Exams');
    queryInterface.dropTable('StudentExams');
    queryInterface.dropTable('TeacherExams');
    queryInterface.dropTable('Types');
    queryInterface.dropTable('Scores');
    queryInterface.dropTable('Subjects');
    queryInterface.dropTable('Questions');
    queryInterface.dropTable('Papers');
    queryInterface.dropTable('QuestionPapers');
    queryInterface.dropTable('StudentAnswers');
  }
};
