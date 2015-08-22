module.exports = {
  up: function (queryInterface, Sequelize) {
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
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('type');
  }
};
