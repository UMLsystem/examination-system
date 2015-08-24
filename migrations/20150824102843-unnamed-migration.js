module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
      'subject',{
        sub_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        que_id: Sequelize.INTEGER,
        exa_id: Sequelize.INTEGER
      }
    );

    migration.addColumn('question','sub_id',Sequelize.INTEGER);
    migration.addColumn('exam','sub_id',Sequelize.INTEGER);
  },


  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('subject');
    migration.removeColumn('question', 'sub_id');
    migration.removeColumn('exam', 'sub_id');
  }
};
