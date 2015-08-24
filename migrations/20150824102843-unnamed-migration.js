module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
      'subject',{
        sub_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        sub_name: Sequelize.INTEGER,
      }
    );

    queryInterface.addColumn('question','sub_id',Sequelize.INTEGER);
    queryInterface.addColumn('exam','sub_id',Sequelize.INTEGER);
  },


  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('subject');
    migration.removeColumn('question', 'sub_id');
    migration.removeColumn('exam', 'sub_id');
  }
};
